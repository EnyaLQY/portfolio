---
title: "Pixel Painting Robot"
category: "Physical Design & Prototyping"
timeline: "2022.9 - 2022.12"
cover: "assets/img/portfolio/pixel/IMG_0873 3.jpg"
summary: "Co-designed and programmed a tabletop robot that translates an image into an abstract, limited-palette pixel painting."
teamMembers: "4"
position: "Designer, Programmer"
tools: "Photoshop, Procreate, Cardboard, 3D Printing, Laser Cutting, Fusion 360, Arduino"
videoUrl: "https://drive.google.com/file/d/1PT-jACoj5VUoOtFcVMmlsxacDYfR1-0u/view?usp=sharing"
videoLabel: "Short video demo"
heroGallery:
  - src: "assets/img/portfolio/pixel/IMG_0873 3.jpg"
    alt: "Pixel Painting Robot"
  - src: "assets/img/portfolio/pixel/Untitled_Artwork 19.JPG"
    alt: "Pixel Painting Robot mechanism concept"
  - src: "assets/img/portfolio/pixel/Screen Shot 2023-01-17 at 11.34.30 PM.png"
    alt: "Pixel Painting Robot development"
  - src: "assets/img/portfolio/pixel/Screen Shot 2023-01-17 at 11.35.44 PM.png"
    alt: "Pixel Painting Robot assembly"
  - src: "assets/img/portfolio/pixel/Screen Shot 2023-01-08 at 11.43.07 PM.png"
    alt: "Pixel Painting Robot final output"
info:
  teamMembers: "4"
  role: "Designer, Programmer"
  tools: "Photoshop, Procreate, Cardboard, 3D Printing, Laser Cutting, Fusion 360, Arduino"
blocks:
  - type: "paragraph"
    title: "Project Goal"
    paragraphs:
      - "<strong>How might a tabletop robot translate a source image into an abstract physical painting using a deliberately limited set of colors?</strong>"
      - "In a four-person team, I designed and programmed parts of a painting robot that converts an image into a pixel pattern, selects a color, moves to the correct coordinate, and stamps the result onto paper."
      - "The project treated the machine as both a creative tool and a mechanical system: its physical footprint, palette, motion accuracy, and repeatability all shaped the final artwork."

  - type: "card-grid"
    layout: "3"
    items:
      - label: "Constraint 01"
        title: "Small physical canvas"
        description: "The drawing area was limited to an 8 × 8 grid, turning each output into a deliberately simplified pixel composition."
      - label: "Constraint 02"
        title: "Limited color palette"
        description: "A rotating plate supplied six stamp colors, requiring the robot to make a clear, repeatable color-selection decision."
      - label: "Constraint 03"
        title: "Mechanical precision"
        description: "Each painted pixel depended on reliable positioning, vertical pressure, and coordination across multiple motors and custom parts."

  - type: "two-column"
    title: "Concept & System Architecture"
    layout: "1-2"
    left:
      kind: "text"
      paragraphs:
        - "The first concept framed the robot as a compact, two-dimensional drawing machine. From there, we broke the behavior into independent mechanisms that could be prototyped, tested, and assembled as one system."
        - "<strong>Input image → pixel coordinates → color selection → motion → stamped output</strong> became the guiding interaction loop for the physical design and Arduino control logic."
        - "<a href=\"https://docs.google.com/document/d/1qvTSukYgcnc6_5oWpyhITSzHZ3lAQS_BCQPS5JGvs7U/edit?usp=sharing\" target=\"_blank\" rel=\"noreferrer\">View the detailed research and design documentation.</a>"
    right:
      kind: "image"
      image:
        src: "assets/img/portfolio/pixel/Untitled_Artwork 17.JPG"
        alt: "Pixel Painting Robot concept sketch"
        caption: "Early concept sketch for a two-dimensional painting robot."

  - type: "card-grid"
    layout: "2x2"
    items:
      - label: "Module 01"
        title: "Drawing bed + Z-axis"
        description: "A movable drawing surface supports vertical positioning and coordinates movement across the painting area."
      - label: "Module 02"
        title: "X-axis carriage"
        description: "A fixed-height, belt-driven carriage moves left and right to find each pixel location."
      - label: "Module 03"
        title: "Rotating color plate"
        description: "Six physical stamps rotate into position so the system can select the required color."
      - label: "Module 04"
        title: "Pushing mechanism"
        description: "A vertical actuator presses the selected stamp onto paper to complete one painted pixel."

  - type: "paragraph"
    title: "From Diagram to Physical Proof"
    paragraphs:
      - "Before committing to fabricated parts, we built a full-scale cardboard prototype with tape and chopsticks. The tangible model exposed missing connections, spatial conflicts, and structural requirements that were not obvious in the diagrams."
      - "Faculty feedback during this phase helped us refine the overall architecture before investing in 3D-printed and laser-cut components."

  - type: "two-column"
    layout: "1-2"
    left:
      kind: "text"
      paragraphs:
        - "<h5>Cardboard prototype</h5>"
        - "The full-scale mockup let us test proportions, motion paths, and component placement at low cost. It also identified which structural parts needed to be modeled and fabricated for the next iteration."
        - "<a href=\"https://drive.google.com/drive/folders/1zbSzVDJJj1kGtX_12NMGZkm8fGzh0Gxv?usp=sharing\" target=\"_blank\" rel=\"noreferrer\">View additional cardboard prototype photos.</a>"
    right:
      kind: "image"
      image:
        src: "assets/img/portfolio/pixel/Screen Shot 2023-01-17 at 11.50.58 PM.png"
        alt: "Full-scale cardboard Pixel Painting Robot prototype"
        caption: "A low-fidelity physical model surfaced structural questions early."

  - type: "paragraph"
    title: "Mechanism Development"
    paragraphs:
      - "We split the final build into implementable motion and stamping systems. Team members owned different assemblies while aligning on common motors, belts, pulleys, and custom fabricated parts."

  - type: "process-grid"
    layout: "1x2"
    approaches:
      - label: "System 01"
        title: "Position the drawing surface"
        description: "I focused on anchoring the motor and belt to the drawing pad with 3D-printed parts, then programmed the movement direction and distance in Arduino."
        steps:
          - "Model and print motor anchors"
          - "Mount belts and pulleys to the pad"
          - "Calibrate Z- and X-axis travel"
          - "Program direction and distance control"
        image:
          src: "assets/img/portfolio/pixel/Screen Shot 2023-01-17 at 11.35.54 PM.png"
          alt: "Z-axis and drawing-pad implementation"
          caption: "Custom mounts connected the motor-and-belt system to the movable drawing pad."
      - label: "System 02"
        title: "Select and stamp each color"
        description: "A rotating color plate chose the appropriate stamp; once the target coordinate was reached, a pushing unit applied paint to the drawing surface."
        steps:
          - "Index the six-color stamp plate"
          - "Move to the target pixel coordinate"
          - "Align the selected stamp"
          - "Press and release for a repeatable mark"
        image:
          src: "assets/img/portfolio/pixel/Screen Shot 2023-01-17 at 11.36.21 PM.png"
          alt: "Rotating color plate and stamping mechanism"
          caption: "Color selection and pressing mechanics completed each physical pixel."

  - type: "paragraph"
    title: "Final Prototype & Next Steps"
    paragraphs:
      - "The final prototype could select colors and navigate to the correct location to create pixel patterns. After the first presentation, we identified the final refinements needed to make the system more reliable and easier to operate."

  - type: "card-grid"
    layout: "2x2"
    items:
      - label: "Refinement 01"
        title: "Stabilize the structure"
        description: "Add a support board between the Z-axis rail and drawing pad."
      - label: "Refinement 02"
        title: "Improve stamping"
        description: "Adjust stamp geometry and spring behavior for a more reliable print."
      - label: "Refinement 03"
        title: "Integrate wiring"
        description: "Consolidate connections to reduce friction during setup and operation."
      - label: "Refinement 04"
        title: "Increase position accuracy"
        description: "Extend the control logic for more precise coordinate finding."

  - type: "two-column"
    layout: "1-2"
    left:
      kind: "text"
      paragraphs:
        - "<h5>Working prototype</h5>"
        - "By completing these improvements, the team delivered a functioning machine that could select colors, move into position, and stamp an abstract pixel pattern."
        - "<a href=\"https://drive.google.com/file/d/1PT-jACoj5VUoOtFcVMmlsxacDYfR1-0u/view?usp=sharing\" target=\"_blank\" rel=\"noreferrer\">Watch the short video demo.</a>"
    right:
      kind: "image"
      image:
        src: "assets/img/portfolio/pixel/Screen Shot 2023-01-08 at 11.45.46 PM.png"
        alt: "Final Pixel Painting Robot prototype"
        caption: "The completed prototype integrated color selection, positioning, and stamping."

  - type: "image-grid"
    images:
      - src: "assets/img/portfolio/pixel/arduino1.png"
        alt: "Pixel Painting Robot Arduino detail"
      - src: "assets/img/portfolio/pixel/arduino2.png"
        alt: "Pixel Painting Robot wiring and control detail"
featured: true
---
