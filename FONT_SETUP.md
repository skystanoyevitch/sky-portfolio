# Custom Font Setup Instructions

## Steps to add your custom font:

1. **Add your font files** to the `src/assets/fonts/` directory:

   - Place your `.woff2`, `.woff`, `.ttf`, or `.otf` files here
   - Example: `YourCustomFont.woff2`, `YourCustomFont.woff`, `YourCustomFont.ttf`

2. **Update the font CSS** in `src/assets/fonts/fonts.css`:

   - Replace `'CustomTitleFont'` with your actual font name
   - Update the file paths to match your font file names
   - Add multiple font weights/styles if needed

3. **Use the font in your components**:

   ### Option 1: Using Tailwind class (RECOMMENDED)

   ```jsx
   <h1 className="font-title text-6xl">SKY STANOYEVITCH</h1>
   ```

   ### Option 2: Using CSS class

   ```jsx
   <h1 className="custom-title-font text-6xl">SKY STANOYEVITCH</h1>
   ```

   ### Option 3: Direct CSS

   ```jsx
   <h1 style={{ fontFamily: 'CustomTitleFont, "Space Grotesk", sans-serif' }}>
     SKY STANOYEVITCH
   </h1>
   ```

## Example Files You Need:

**In `src/assets/fonts/` folder:**

- `MyCustomFont.woff2`
- `MyCustomFont.woff`
- `MyCustomFont.ttf`

**Update `src/assets/fonts/fonts.css`:**

```css
@font-face {
  font-family: "MyCustomFont";
  src: url("./MyCustomFont.woff2") format("woff2"), url("./MyCustomFont.woff")
      format("woff"), url("./MyCustomFont.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

**Update Tailwind config `tailwind.config.js`:**

```javascript
title: [
  "MyCustomFont", // Your actual font name here
  "Pacifico",
  "cursive",
  // ... rest of fallbacks
],
```

## Usage Examples:

```jsx
// In your Hero component
<h1 className="font-title text-8xl font-bold bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
  SKY STANOYEVITCH
</h1>

// For subtitles
<h2 className="font-title text-4xl text-text-primary dark:text-dark-text-primary">
  Full Stack Developer
</h2>
```

## Troubleshooting:

1. **Font not loading?** Check browser Network tab to see if font files are being requested
2. **Font not displaying?** Verify the font name in CSS matches exactly what you use in the Tailwind config
3. **Font looks different?** Make sure you have the correct font-weight specified in your @font-face rules

   ### Option 2: Using CSS class

   ```jsx
   <h1 className="custom-title-font text-6xl">SKY STANOYEVITCH</h1>
   ```

   ### Option 3: Inline style

   ```jsx
   <h1 style={{ fontFamily: "CustomTitleFont, Pacifico, cursive" }}>
     SKY STANOYEVITCH
   </h1>
   ```

## Example font-face declaration:

```css
@font-face {
  font-family: "YourFontName";
  src: url("./YourFontFile.woff2") format("woff2"), url("./YourFontFile.woff")
      format("woff"), url("./YourFontFile.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

## Currently configured:

- Tailwind class: `font-title`
- CSS class: `custom-title-font`
- Font family name: `CustomTitleFont` (update this to your font's actual name)
