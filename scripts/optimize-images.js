import sharp from 'sharp'
import { readdir, mkdir } from 'fs/promises'
import { join, parse } from 'path'
import { existsSync } from 'fs'

const PUBLIC_DIR = './public'
const OPTIMIZED_DIR = './public/optimized'

// Configuration for different image types
const CONFIG = {
  backgrounds: {
    files: [
      'costraction_background.jpg',
      'costraction_background2.jpg',
      'costraction_background3.jpg',
      'contact_me.jpg',
      'loading.jpg',
      'about.jpg'
    ],
    // Max width for background images (1920px is enough for most screens)
    maxWidth: 1920,
    quality: 80
  },
  regular: {
    maxWidth: 1200,
    quality: 85
  }
}

async function optimizeImage(inputPath, outputPath, options = {}) {
  const { maxWidth = 1920, quality = 80 } = options

  try {
    const image = sharp(inputPath)
    const metadata = await image.metadata()

    console.log(`Processing: ${inputPath}`)
    console.log(`  Original size: ${metadata.width}x${metadata.height}`)

    // Resize if wider than maxWidth
    let pipeline = image
    if (metadata.width > maxWidth) {
      pipeline = pipeline.resize(maxWidth, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
    }

    // Convert to WebP
    await pipeline
      .webp({ quality })
      .toFile(outputPath)

    console.log(`  Saved: ${outputPath}`)

    // Also create a tiny blur placeholder (20px wide)
    const { name } = parse(outputPath)
    const placeholderPath = outputPath.replace('.webp', '-placeholder.webp')

    await sharp(inputPath)
      .resize(20, null, { fit: 'inside' })
      .blur(2)
      .webp({ quality: 20 })
      .toFile(placeholderPath)

    console.log(`  Placeholder: ${placeholderPath}`)

    return true
  } catch (error) {
    console.error(`Error processing ${inputPath}:`, error.message)
    return false
  }
}

async function main() {
  console.log('🖼️  Image Optimization Script\n')

  // Create optimized directory if it doesn't exist
  if (!existsSync(OPTIMIZED_DIR)) {
    await mkdir(OPTIMIZED_DIR, { recursive: true })
  }

  // Create subdirectory for services
  const servicesOptDir = join(OPTIMIZED_DIR, 'our_services')
  if (!existsSync(servicesOptDir)) {
    await mkdir(servicesOptDir, { recursive: true })
  }

  let processed = 0
  let failed = 0

  // Process background images
  console.log('📷 Processing background images...\n')
  for (const file of CONFIG.backgrounds.files) {
    const inputPath = join(PUBLIC_DIR, file)
    if (!existsSync(inputPath)) {
      console.log(`  Skipping ${file} (not found)`)
      continue
    }

    const { name } = parse(file)
    const outputPath = join(OPTIMIZED_DIR, `${name}.webp`)

    const success = await optimizeImage(inputPath, outputPath, {
      maxWidth: CONFIG.backgrounds.maxWidth,
      quality: CONFIG.backgrounds.quality
    })

    if (success) processed++
    else failed++
  }

  // Process service images (already WebP but can be further optimized)
  console.log('\n📷 Processing service images...\n')
  const servicesDir = join(PUBLIC_DIR, 'our_services')
  if (existsSync(servicesDir)) {
    const files = await readdir(servicesDir)
    for (const file of files) {
      if (!file.endsWith('.webp') && !file.endsWith('.jpg') && !file.endsWith('.png')) continue

      const inputPath = join(servicesDir, file)
      const { name } = parse(file)
      const outputPath = join(servicesOptDir, `${name}.webp`)

      const success = await optimizeImage(inputPath, outputPath, {
        maxWidth: CONFIG.regular.maxWidth,
        quality: CONFIG.regular.quality
      })

      if (success) processed++
      else failed++
    }
  }

  console.log(`\n✅ Done! Processed: ${processed}, Failed: ${failed}`)
  console.log('\n📝 Next steps:')
  console.log('   1. Check the /public/optimized folder for the new images')
  console.log('   2. Compare file sizes (should be 80-90% smaller)')
  console.log('   3. Update your code to use the optimized images from /optimized/')
  console.log('   4. Delete the old large images once verified')
}

main().catch(console.error)
