# PROJECT: LUMINE — A LITTLE CORNER OF THE INTERNET, MADE JUST FOR HER

## 0. YOUR ROLE AND OBJECTIVE

You are an exceptionally skilled frontend developer, creative director, interaction designer, and digital experience designer.

Your task is to completely redesign and rebuild my existing birthday website from scratch.

Do not simply modify the existing design or make superficial improvements. I intend to replace the entire current website. You may inspect the existing project to understand its structure and dependencies, but the final visual experience should be designed according to this brief.

This is a personal birthday website dedicated to someone special.

**Recipient:** Lumine  
**Made with love by:** VINAY

The website should feel like a small, beautiful, interactive digital gift.

It should be cute, artistic, warm, personal, slightly playful, visually sophisticated, and memorable.

The experience should resemble something carefully designed by a talented independent designer, not something generated from an AI website builder.

The most important requirement:

**Do not make this website look AI-generated.**

Every design decision must feel intentional. Typography, spacing, image placement, colors, animations, borders, and interactions should work together to create a cohesive visual identity.

Do not rush into implementation. First understand the existing project, then plan the visual system and build it properly.

---

# 1. CREATIVE DIRECTION

## The overall aesthetic

The visual identity should combine:

- Japanese kawaii aesthetics.
- Pinterest scrapbook layouts.
- Soft gyaru and coquette fashion inspiration.
- Handwritten sketchbook elements.
- Pastel stationery.
- Cute manga-inspired visual storytelling.
- A little nostalgic internet culture.
- Minimal, polished editorial web design.

Imagine opening a beautifully maintained personal Pinterest board or a handmade birthday scrapbook.

The website should feel like:

- A page from someone's personal diary.
- A collection of carefully selected photographs.
- A handmade birthday card.
- A little digital world that belongs to Lumine.

It should be visually rich without being cluttered.

Cute does not mean childish. Professional does not mean corporate.

Find the balance between the two.

## Visual personality

The design should be:

- Soft, but not washed out.
- Cute, but not overloaded.
- Minimal, but not empty.
- Interactive, but not distracting.
- Artistic, but still easy to navigate.
- Personal, rather than commercially designed.

Avoid making every section look identical.

Different sections should have their own compositions while maintaining the same overall visual language.

---

# 2. STRICT DESIGN RULES — AVOID THE AI-GENERATED LOOK

These requirements are extremely important.

Do not use the common visual patterns that immediately make websites look AI-generated.

### Absolutely avoid:

1. Generic purple-to-pink gradients.
2. Excessive glassmorphism.
3. Blurred translucent cards everywhere.
4. Repetitive rounded cards with identical layouts.
5. Random floating emoji decorations.
6. Excessive sparkle effects.
7. Huge headings with generic marketing copy.
8. Generic hero sections with text on the left and an image on the right.
9. Random decorative blobs.
10. Excessive shadows.
11. Unnecessary glowing borders.
12. Identical section structures repeated throughout the page.
13. Random animations that serve no purpose.
14. Excessive use of AI-generated illustrations.
15. Unnecessary badges and pills.
16. Generic phrases such as "Welcome to your special day", "A magical journey awaits", or "Made with love just for you" repeated throughout the website.
17. Generic stock photography.
18. Unnecessary icons next to every heading.
19. Huge empty sections created just to make the website longer.
20. Fake buttons or interactions that do nothing.

### Instead, use:

- Natural asymmetrical compositions.
- Carefully positioned photographs.
- Subtle paper textures.
- Fine dashed and stitched borders.
- Small handwritten annotations.
- Delicate ribbons.
- Washi-tape-inspired image attachments.
- Organic image rotations.
- Editorial typography.
- Small decorative doodles.
- Thoughtful whitespace.
- Slightly imperfect scrapbook arrangements.
- Different visual compositions for different sections.

The website should look designed, not assembled from components.

Do not sacrifice usability for decoration.

---

# 3. TECHNOLOGY AND PROJECT REQUIREMENTS

Use the existing project setup wherever practical.

Preferred stack:

- React.
- Vite, if already used.
- Tailwind CSS.
- Framer Motion for meaningful animations.
- Lucide React for interface icons.
- HTML5 Canvas for the drawing application.

Use JavaScript or TypeScript according to the existing project conventions.

Do not introduce unnecessary libraries.

Do not rewrite working infrastructure without a good reason.

The website must be a fully functional single-page application.

All interactive elements must actually work.

The final result must be:

- Fully responsive.
- Optimized for mobile.
- Optimized for desktop.
- Fast-loading.
- Accessible.
- Stable across modern browsers.
- Free of broken image references.
- Free of console errors.
- Easy to maintain.

Use reusable components, sensible file organization, and clean code.

---

# 4. ASSET MANAGEMENT

I will provide a folder containing the following images.

All images will be available inside:

`/public/images/`

Use these exact filenames.

| Filename | Purpose |
|---|---|
| tairazuma-1.jpg | First Tairazuma artwork |
| tairazuma-2.jpg | Second Tairazuma artwork |
| cake.jpg | Birthday cake |
| fashion.jpg | Fashion inspiration |
| art-piece.jpg | Artwork |
| cute-cat.png | Cat mascot and sketchpad stamp |
| cute-snake.png | Snake mascot and sketchpad stamp |
| creepy-cute.jpg | Creepy-Cute theme artwork |

### Asset handling requirements

Before implementing the website:

1. Inspect all available image files.
2. Verify their actual dimensions and aspect ratios.
3. Identify whether PNG images contain transparency.
4. Determine the most appropriate placement for each image.
5. Preserve the original images.
6. Do not recreate or replace provided artwork.
7. Do not apply aggressive filters that destroy the original appearance.

Use `object-fit` appropriately.

Do not force every photograph into identical square containers.

Preserve image proportions wherever possible.

For decorative images, use transparent backgrounds when available.

If an asset is missing, provide a graceful fallback and report it clearly. Never leave a broken image icon.

Do not silently substitute unrelated images.

---

# 5. COLOR SYSTEM AND TYPOGRAPHY

## Primary palette

Build the visual identity around these colors:

| Color | Suggested value | Usage |
|---|---|---|
| Warm cream | #FFF9F2 | Main background |
| Blush pink | #F5DDE3 | Main decorative color |
| Soft rose | #D99EAF | Accents |
| Matcha green | #DDE8D4 | Secondary surfaces |
| Baby blue | #DCEAF5 | Decorative elements |
| Butter yellow | #F8EAC2 | Highlights |
| Warm brown | #79645F | Main text |
| Dark cocoa | #453B3A | Strong text |

These are starting values, not restrictions.

Maintain sufficient contrast for readability.

Avoid making the entire website pink.

Use the colors with restraint.

Warm cream should be the dominant background. Pink, green, blue, and yellow should appear as carefully balanced accents.

## Typography

Typography must feel like part of the artistic direction.

Use a carefully selected combination of:

1. An elegant serif for selected large headings.
2. A clean sans-serif for body text and navigation.
3. A restrained handwritten-style font for personal annotations.

Possible font directions:

- Fraunces or Cormorant Garamond for editorial headings.
- DM Sans or Nunito Sans for readable interface text.
- Caveat for handwritten annotations.

Do not use all three fonts everywhere.

Establish a consistent hierarchy.

Handwritten typography should appear occasionally, like a small note written in the margins of a scrapbook.

Avoid excessively decorative fonts for important content.

---

# 6. WEBSITE STRUCTURE AND EXPERIENCE

Build the page as a continuous birthday experience.

The user should feel as though they are exploring a personal scrapbook rather than scrolling through a conventional landing page.

The experience should contain the following sections.

---

# SECTION 01 — THE OPENING EXPERIENCE

Create a beautiful introductory screen.

This is the first impression, so pay particular attention to it.

### Visual direction

A warm cream background.

A small handwritten annotation near the top:

"A little something for you..."

Below it, create a beautiful editorial composition.

Main heading:

"Joyeux Anniversaire, Lumine!"

Supporting text:

"A little corner of the internet, made just for you."

Small attribution:

"With love, VINAY"

Include a tasteful visual arrangement of the provided cat illustration, little flowers, ribbons, and delicate decorative details.

Do not overcrowd the opening screen.

### Interaction

Include a small invitation:

"Open your little gift"

Clicking it should smoothly transition into the main birthday experience.

Use a gentle entrance animation.

Avoid long loading screens and unnecessary intro animations.

The user should be able to enter immediately.

---

# SECTION 02 — THE BIRTHDAY CAKE

This should be one of the main visual highlights.

Use:

`/images/cake.jpg`

### Design

Create a carefully composed birthday cake area.

The cake image should be prominent but not unnecessarily oversized.

Surround it with subtle birthday decorations:

- Small candles.
- Delicate ribbons.
- Tiny flowers.
- Handwritten annotations.
- Small birthday details.

Heading:

"Make a little wish."

Supporting text:

"Some wishes are meant to be kept."

### Interactive candles

Create CSS-based birthday candles layered over the cake illustration or positioned as a complementary visual element.

The candles should have animated flames.

Each flame should be clickable.

When Lumine clicks a flame:

- The flame should disappear.
- A gentle extinguishing animation should play.
- A tiny smoke animation should appear.
- The candle should visually remain in place.

Once all candles are extinguished:

1. Trigger a tasteful pastel confetti animation.
2. Show a small floating heart animation.
3. Display a message:

   "Your wish is officially on its way. ♡"

4. Optionally play a gentle birthday music-box chime.

### Audio requirements

Audio must never autoplay.

Keep audio muted until the user explicitly activates it.

Provide a clear sound toggle.

Use a short, original, gentle chime rather than copyrighted music.

If browser audio is unavailable, the rest of the interaction must continue working normally.

Allow the user to relight the candles or replay the experience.

---

# SECTION 03 — OUR LITTLE PINTEREST CORNER

This is one of the most important sections.

The visual direction should be inspired by an actual Pinterest moodboard.

Use these images:

- `tairazuma-1.jpg`
- `tairazuma-2.jpg`
- `fashion.jpg`
- `art-piece.jpg`

### Heading

"A few things that remind me of you."

Small annotation:

"A little collection of your kind of things."

### Layout

Create a visually interesting Pinterest-inspired masonry board.

Do not use a conventional four-card grid.

Each image should have its own visual identity.

Possible treatments:

- Slightly rotated photographs.
- Paper-like backgrounds.
- Small pieces of washi tape.
- Thin borders.
- Subtle shadows.
- Tiny handwritten notes.
- Different image dimensions.

Maintain a natural, curated appearance.

### Individual image content

**Pin 01 — Tairazuma**

Use `tairazuma-1.jpg`.

Caption:

"Some things are just too cute not to save."

Include a playful reference to Taira and Azuma from *You and I Are Polar Opposites*.

**Pin 02 — Another Tairazuma moment**

Use `tairazuma-2.jpg`.

Caption:

"Your taste in fictional couples deserves its own appreciation board."

**Pin 03 — Fashion**

Use `fashion.jpg`.

Caption:

"Your style, your rules. Never lose that little creative spark."

**Pin 04 — Art**

Use `art-piece.jpg`.

Caption:

"There's something special about the things people create with their own hands."

If this image is her own artwork, make the caption especially appreciative without inventing details about the artwork.

### Interactive image cards

Clicking a pin should open an elegant interaction.

Possible behavior:

- A subtle card flip.
- A small image reveal.
- A note appearing underneath.
- A gentle expansion into a larger view.

The interaction should feel like turning over a photograph and finding a handwritten note on its back.

Do not force a flip animation if it compromises mobile usability.

Each image should be independently interactive.

Include a close interaction when the image expands.

Ensure keyboard accessibility.

---

# SECTION 04 — THE LITTLE ART STUDIO

Create a genuinely functional miniature sketchpad.

This is not a decorative mockup.

It must actually work.

Use:

`cute-cat.png`

`cute-snake.png`

### Visual direction

The sketchpad should look like a small drawing page inside a handmade sketchbook.

Use:

- Warm paper background.
- Thin notebook borders.
- Subtle paper texture.
- Small toolbar.
- Cute labels.
- Carefully spaced controls.

Heading:

"Your tiny art studio."

Supporting text:

"Make something silly, cute, or completely chaotic."

### Drawing functionality

Implement a working HTML5 Canvas drawing area.

Provide:

**Brush tools**

- Pencil.
- Soft brush.
- Eraser.

**Color options**

- Blush pink.
- Matcha green.
- Baby blue.
- Lavender.
- Butter yellow.
- Cocoa brown.
- Custom color picker.

**Brush sizes**

Provide a small selection of brush sizes.

**Stamps**

Allow the user to place:

- Cat sticker.
- Snake sticker.
- Bow.
- Flower.
- Heart.
- Star.

Use the actual provided transparent PNG assets for the cat and snake stamps.

For bows, flowers, hearts, and stars, use original CSS or SVG artwork.

### Additional controls

- Undo.
- Clear canvas.
- Download as PNG.
- Change brush size.
- Change brush color.
- Switch tools.

### Technical requirements

Implement proper pointer handling.

Support:

- Mouse.
- Touch.
- Stylus where supported.

The canvas must remain usable on mobile.

Handle high-DPI screens correctly.

When resizing the canvas, preserve the existing drawing whenever possible.

The downloaded image should contain the actual drawing and should not include interface controls.

Make the download filename:

`lumines-little-masterpiece.png`

Add a small success message after downloading.

Do not use fake controls.

Every visible button must work.

---

# SECTION 05 — THE LITTLE MASCOT CORNER

Create a small interactive corner containing two adorable companions.

Assets:

- `cute-cat.png`
- `cute-snake.png`

### Design

Place the cat and snake in a way that feels like they are sitting on the edge of the scrapbook.

They should not obstruct content.

Use transparent PNGs where possible.

Give them gentle idle animations:

- Subtle floating.
- Small movement.
- Occasional blinking if feasible without modifying the original image.
- Tiny reactions to clicks.

### Interaction

Clicking the cat should display a small speech bubble.

Example messages:

"You're pawsitively wonderful!"

"Keep making beautiful things."

Clicking the snake should display another speech bubble.

Example messages:

"Sending you a little birthday sssssmile!"

"Stay wonderfully yourself."

Include a few messages in French and English.

Examples:

"Tu es adorable !"

"Passe une très belle journée !"

"You're doing amazing, little human."

Randomize messages from a predefined list.

Do not make the characters speak continuously.

The speech bubbles should appear naturally and disappear after a short delay.

Allow another click to display a different message.

Ensure the mascots remain accessible and usable on touchscreens.

---

# SECTION 06 — THE HIDDEN CREEPY-CUTE WORLD

Create a small theme toggle in the top-right navigation area.

Default mode:

"Sweet Mode 🎀"

Alternative mode:

"Creepy-Cute Mode 👀"

This should be a genuine visual theme transformation.

### Sweet Mode

Use:

- Warm cream.
- Blush pink.
- Matcha green.
- Baby blue.
- Soft illustrations.
- Delicate decorations.

### Creepy-Cute Mode

Use:

`creepy-cute.jpg`

Introduce:

- Muted charcoal.
- Dusty mauve.
- Dark rose.
- Desaturated lavender.
- Pale grey.
- Monochrome decorative artwork.

The atmosphere should feel like a cute Japanese creepy-cute or yamikawaii scrapbook.

Not horror.

Not frightening.

Not excessively dark.

### Theme transition

When switching modes:

- Background colors should transition smoothly.
- Text colors should adapt.
- Borders should change.
- Decorative elements should change.
- The creepy-cute image should become visible.
- Introduce a few tiny ghost or snake illustrations.
- Keep all sections readable.

The transition should be polished.

Do not simply invert the entire website's colors.

Design a separate coherent palette for each mode.

Preserve the selected theme while navigating the page.

Provide an accessible toggle label and visible state.

---

# SECTION 07 — THE BIRTHDAY LETTER

This should be the emotional highlight of the experience.

Place it towards the end of the page.

### Visual direction

Create a beautiful envelope.

Think of a handwritten birthday letter sealed with a little ribbon or heart-shaped sticker.

Use:

- Warm paper.
- A subtle envelope texture.
- A delicate ribbon.
- Small handwritten annotations.
- A wax-seal-inspired decorative detail.

Do not make it look like a generic popup.

### Initial state

Display:

"One last little thing..."

Below:

"A letter for you."

A button or interactive envelope:

"Open your letter ♡"

### Opening interaction

When clicked:

1. The envelope flap opens.
2. The letter slides out.
3. The paper unfolds or expands.
4. The message becomes visible.

Use Framer Motion for a smooth, natural animation.

Keep the interaction lightweight.

### Letter content

Use the following placeholder:

"[WRITE YOUR PERSONAL BIRTHDAY MESSAGE TO LUMINE HERE]"

This message must remain easy to edit in one clearly identified content file or configuration object.

IMPORTANT:

Do not invent personal memories, conversations, promises, emotional history, or facts about our friendship.

Do not write an overly dramatic AI-generated letter.

The message should eventually sound like something genuinely written by a friend.

Provide a sensible placeholder and make it easy for me to replace.

At the end:

"With love, VINAY ♡"

Optional handwritten footer:

"Made with a little extra care, just for you."

The letter must be readable on mobile.

---

# SECTION 08 — THE FINAL FOOTER

Keep the footer minimal.

Possible content:

"Made for Lumine, with love."

"© A little birthday corner by VINAY"

Include a small cat or flower illustration.

Do not add unnecessary social media links, copyright claims, or generic navigation.

The footer should feel like the final page of a scrapbook.

---

# 7. NAVIGATION

Create a small, elegant navigation system.

Do not create a large corporate-style navbar.

Possible navigation labels:

- Home
- Cake
- Little Board
- Art Studio
- Letter

The navigation should:

- Be minimal.
- Remain easy to use.
- Support smooth scrolling.
- Work on mobile.
- Clearly indicate the active section where appropriate.

The Sweet/Creepy-Cute toggle should be accessible.

Avoid making the navigation visually dominant.

---

# 8. ANIMATIONS AND MICRO-INTERACTIONS

Animations should make the website feel alive.

They should never make it feel like a demonstration of an animation library.

Use Framer Motion where appropriate.

### Recommended interactions

- Gentle entrance transitions.
- Subtle image hover movement.
- Small scrapbook card rotations.
- Soft envelope opening.
- Candle flame movement.
- Confetti when the candles are extinguished.
- Small mascot reactions.
- Smooth theme transitions.
- Delicate button feedback.
- Tiny flower or paper decorations.
- Subtle scroll-based reveals.

### Animation restrictions

Avoid:

- Constantly moving backgrounds.
- Excessive floating particles.
- Large bouncing elements.
- Aggressive parallax.
- Unnecessary scroll hijacking.
- Long transitions.
- Animations that interfere with reading.
- Animations that consume unnecessary mobile resources.

Respect `prefers-reduced-motion`.

The website should still feel beautiful when animations are disabled.

---

# 9. RESPONSIVE DESIGN

Mobile is extremely important.

This website may primarily be opened on a phone.

Do not treat mobile as an afterthought.

### Desktop

- Spacious scrapbook composition.
- Asymmetric Pinterest-style image board.
- Carefully positioned decorations.
- Comfortable reading width.
- Attractive section transitions.

### Tablet

- Adjust image composition.
- Preserve typography hierarchy.
- Prevent cramped controls.

### Mobile

- Single-column content where appropriate.
- Carefully arranged image board.
- Readable headings.
- Comfortable touch targets.
- No horizontal overflow.
- No overlapping decorations.
- Properly sized mascot illustrations.
- Usable canvas drawing controls.
- Fully functional letter interaction.
- Navigation that does not consume excessive screen space.

Do not simply shrink the desktop layout.

Redesign compositions where necessary.

---

# 10. ACCESSIBILITY AND USABILITY

Make the website usable beyond its visual appearance.

Requirements:

- Semantic HTML.
- Meaningful image alt text.
- Keyboard-accessible interactions.
- Visible focus states.
- Accessible color contrast.
- Proper button labels.
- Appropriate ARIA attributes.
- Reduced-motion support.
- Touch-friendly controls.
- Clear feedback for completed actions.

Never use a clickable `div` when a proper button is appropriate.

Ensure the drawing application has understandable controls.

---

# 11. PERFORMANCE AND CODE QUALITY

Do not compromise performance for visual effects.

Requirements:

- Lazy-load images below the fold.
- Avoid unnecessary dependencies.
- Optimize component rendering.
- Clean up event listeners.
- Clean up animation resources.
- Avoid memory leaks.
- Avoid unnecessary state updates.
- Keep canvas interactions responsive.
- Use appropriate image dimensions.
- Avoid oversized background assets.
- Avoid unnecessary DOM complexity.

Use a sensible component architecture.

Suggested structure:

src/
  components/
    Navigation
    ThemeToggle
    BirthdayHero
    BirthdayCake
    PinterestBoard
    SketchStudio
    MascotCorner
    BirthdayLetter
    Footer

  hooks/
    useTheme
    useCanvas

  data/
    birthdayContent
    mascotMessages

  styles/
    global styles and theme variables

  App.jsx

Adapt this structure to the existing project if it already has a better organization.

Keep all editable personal content in a centralized configuration file.

This includes:

- Recipient name.
- Sender name.
- Birthday message.
- Image captions.
- Mascot messages.
- Optional footer quotation.

I should not need to search through multiple React components to change a sentence.

---

# 12. PERSONALIZATION AND CONTENT RULES

Recipient name: Lumine.

Sender: VINAY.

Use these names consistently.

Use French sparingly and naturally.

The opening should say:

"Joyeux Anniversaire, Lumine!"

The rest of the website should primarily use natural English, with a few French expressions in appropriate places.

Avoid machine-generated-sounding language.

Avoid repetitive compliments.

Do not assume personal details that I have not supplied.

The Tairazuma references should be accurate to the supplied artwork and the series *You and I Are Polar Opposites*.

Keep the tone playful, sincere, and friendly.

The birthday message should feel personal without pretending to know memories that have not been provided.

---

# 13. IMPORTANT IMPLEMENTATION WORKFLOW

Follow these steps in order.

### STEP 1 — INSPECT

Inspect the complete existing project.

Understand:

- Current framework.
- Dependencies.
- Routing.
- Existing components.
- Styling setup.
- Available assets.
- Build configuration.

Do not immediately overwrite files before understanding the project.

### STEP 2 — PLAN

Establish:

- Design system.
- Color variables.
- Typography.
- Component structure.
- Image placement.
- Interaction architecture.
- Responsive behavior.

Make sure the website feels cohesive before implementation.

### STEP 3 — BUILD

Implement the complete experience.

Do not stop after building the hero section.

Do not leave unfinished sections.

Do not use placeholder functionality for the sketchpad, candles, theme toggle, or envelope.

All interactions must work.

### STEP 4 — TEST

Test the complete website.

Check:

- All images load.
- All navigation links work.
- Theme switching works.
- Candle interactions work.
- Confetti appears correctly.
- Sound is never autoplayed.
- Pinterest images open correctly.
- Sketchpad drawing works.
- Undo and eraser work.
- PNG export works.
- Cat and snake respond to clicks.
- Birthday letter opens correctly.
- Mobile navigation works.
- No horizontal overflow exists.
- No console errors exist.
- No broken layouts exist.

### STEP 5 — POLISH

After the initial implementation, inspect the actual rendered website.

Do not assume that working code automatically means good design.

Look for:

- Awkward whitespace.
- Uneven spacing.
- Poor image crops.
- Inconsistent typography.
- Overlapping decorations.
- Excessive animations.
- Inconsistent border styles.
- Unnecessary visual elements.
- Generic-looking compositions.

Fix these issues.

Refine the website until it feels like a professionally art-directed personal experience.

---

# 14. FINAL QUALITY STANDARD

The final website should achieve all of the following:

**Visual quality**
- Looks carefully handcrafted.
- Has a consistent visual identity.
- Uses the supplied photographs beautifully.
- Has excellent typography and spacing.
- Feels like a Pinterest-inspired personal scrapbook.

**Emotional quality**
- Feels warm and thoughtful.
- Is clearly dedicated to Lumine.
- Has playful details.
- Includes a meaningful birthday letter experience.

**Technical quality**
- Every interaction works.
- The sketchpad is functional.
- The theme switch is functional.
- The candle interaction is functional.
- The website works on mobile and desktop.
- No broken assets or console errors.

**Design restraint**
- No generic AI landing page appearance.
- No unnecessary gradients.
- No excessive glassmorphism.
- No random decorations.
- No repetitive card layouts.
- No fake functionality.

The final result should feel like a small website that someone spent time designing specifically for one person.

Not a commercial product.

Not a generic birthday template.

Not an AI-generated landing page.

A little digital gift.

---

# THE MOST IMPORTANT CREATIVE INSTRUCTION

I want someone opening this website to feel that it was made with genuine thought and attention.

Every little detail should have a reason to exist.

The photographs should feel like collected memories or interests.

The cat and snake should feel like little companions.

The cake should feel celebratory.

The drawing studio should feel playful.

The creepy-cute mode should feel like a little secret.

The letter should feel sincere.

Do not try to impress through complexity.

Impress through taste, restraint, details, and execution.

**Build something beautiful for Lumine.**

**Made with love,  
VINAY.**

