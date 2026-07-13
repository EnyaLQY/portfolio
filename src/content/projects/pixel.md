---
title: "Pixel Painting Robot"
category: "Physical Design & Prototyping"
timeline: "2022.9 - 2022.12"
cover: "assets/img/portfolio/pixel/IMG_0873 3.jpg"
summary: "Our project is focusing on creating a painting robot that can provide an abstract painting according to the given picture. The number of color will be limited and the drawing pad will be designed no larger than 8 by 8."
teamMembers: "4"
position: "Designer, Programmer"
tools: "Digital Drawing (Photoshop, Procreate), Cardboard, 3D printing, Laser Cutting, Hardware (motors, sensors, etc.), Software (Fusion 360, PrusaSlicer, Inkscape, Arduino)"
videoUrl: "https://drive.google.com/file/d/1PT-jACoj5VUoOtFcVMmlsxacDYfR1-0u/view?usp=sharing"
videoLabel: "short video demo"
heroGallery:
  - src: "assets/img/portfolio/pixel/IMG_0873 3.jpg"
    alt: "Pixel Painting Robot"
  - src: "assets/img/portfolio/pixel/Untitled_Artwork 19.JPG"
    alt: "Pixel Painting Robot"
  - src: "assets/img/portfolio/pixel/Screen Shot 2023-01-17 at 11.34.30 PM.png"
    alt: "Pixel Painting Robot"
  - src: "assets/img/portfolio/pixel/Screen Shot 2023-01-17 at 11.35.44 PM.png"
    alt: "Pixel Painting Robot"
  - src: "assets/img/portfolio/pixel/Screen Shot 2023-01-08 at 11.43.07 PM.png"
    alt: "Pixel Painting Robot"
info:
  client: ""
  teamMembers: "4"
  role: "Designer, Programmer"
  tools: "Digital Drawing (Photoshop, Procreate), Cardboard, 3D printing, Laser Cutting, Hardware (motors, sensors, etc.), Software (Fusion 360, PrusaSlicer, Inkscape, Arduino)"
blocks:
  - type: "two-column"
    title: "Design Concept"
    layout: "1-2"
    left:
      kind: "text"
      text: "<p>Our project is focusing on creating a painting robot that can provide an abstract painting according to the given picture. The number of color will be limited and the drawing pad will be designed no larger than 8 by 8.</p><p><a href=\"https://docs.google.com/document/d/1qvTSukYgcnc6_5oWpyhITSzHZ3lAQS_BCQPS5JGvs7U/edit?usp=sharing\" target=\"_blank\" rel=\"noreferrer\">Link to research of previous work and more design objectives.</a></p><p>The rough idea as a 2-dimensional painting robot. (Illustration by Qianya)</p>"
    right:
      kind: "image"
      image:
        src: "assets/img/portfolio/pixel/Untitled_Artwork 17.JPG"
        alt: "Pixel Painting Robot concept sketch"

  - type: "paragraph"
    title: "Initial Design"
    text: "<p>After receiving feedback from our professor and TAs, our group redesigned the style of the robot with reference to the 3D printing machine. (Illustrations by Qianya (Enya))</p><p>We discussed the main functioning parts of the robot. <a href=\"https://docs.google.com/document/d/1qvTSukYgcnc6_5oWpyhITSzHZ3lAQS_BCQPS5JGvs7U/edit?usp=sharing\" target=\"_blank\" rel=\"noreferrer\">Link to detailed design documentation.</a> The implementation of this robot can be described into 4 functional parts that work together to create a pixel painting:</p>"

  - type: "two-column"
    layout: "1-2"
    left:
      kind: "text"
      text: "<h5>(a) Z - Axis Moving Unit</h5><p>Z-axis moving unit which is the printing bed, and it can also move along the Y-axis by motor and belt.</p>"
    right:
      kind: "image"
      image:
        src: "assets/img/portfolio/pixel/Untitled_Artwork 19.JPG"
        alt: "Z-axis moving unit design"

  - type: "two-column"
    spaceBefore: "36"
    layout: "2-1"
    left:
      kind: "image"
      image:
        src: "assets/img/portfolio/pixel/Untitled_Artwork 20.JPG"
        alt: "X-axis moving unit design"
    right:
      kind: "text"
      text: "<h5>(b) X-Axis Moving Unit</h5><p>X-axis moving unit which is fixed at a certain height and can move along the X-axis by motor and belt.</p>"

  - type: "two-column"
    spaceBefore: "36"
    layout: "1-2"
    left:
      kind: "text"
      text: "<h5>(c) &amp; (d) Color Selection and Printing</h5><p>Rotating color plate with 6 stamps of different colors. Y-axis pushing unit moved along the Z-axis and pushes the selected color stamp to stamp on the paper.</p>"
    right:
      kind: "image"
      image:
        src: "assets/img/portfolio/pixel/Untitled_Artwork 18.JPG"
        alt: "Color selection and printing design"

  - type: "two-column"
    title: "Cardboard Prototype"
    spaceBefore: "50"
    left:
      kind: "text"
      text: "<p>Based on the design diagrams, we built a simple physical prototype in actual size with cardboard, tapes and chopsticks. During the discussion with faculty group, we kept improving the structure of the robot. The real proportional structure and components would better help us find out what parts we were missing so that we needed to model and 3D print on our own.</p><p><a href=\"https://drive.google.com/drive/folders/1zbSzVDJJj1kGtX_12NMGZkm8fGzh0Gxv?usp=sharing\" target=\"_blank\" rel=\"noreferrer\">Link to more cardboard prototype pictures.</a></p>"
    right:
      kind: "image"
      image:
        src: "assets/img/portfolio/pixel/Screen Shot 2023-01-17 at 11.50.58 PM.png"
        alt: "Cardboard prototype"

  - type: "two-column"
    title: "Prototype Development"
    spaceBefore: "50"
    layout: "2-1"
    left:
      kind: "text"
      text: "<p>Our group divided up different tasks of the robot. Everyone was responsible to design and revise 3D printing or laser cutting components for different tasks.</p><p>There were <strong>four tasks</strong> for the painting machine. Each task was implemented with belt, pulleys, motor, and 3D printed components (3D modeling by Fusion 360).</p>"
    right:
      kind: "image"
      image:
        src: "assets/img/portfolio/pixel/IMG_1262.JPG"
        alt: "Prototype development process"

  - type: "two-column"
    spaceBefore: "42"
    layout: "1-2"
    left:
      kind: "text"
      text: "<h5>(a) Z-Axis Moving Unit</h5><p>I was assigned the task of anchoring the motor and belt to the drawing pad using 3D printed components. Additionally, I developed the code for controlling the direction and distance of movement using Arduino.</p>"
    right:
      kind: "image"
      image:
        src: "assets/img/portfolio/pixel/Screen Shot 2023-01-17 at 11.35.54 PM.png"
        alt: "Z-axis implementation"

  - type: "two-column"
    spaceBefore: "36"
    layout: "1-2"
    left:
      kind: "text"
      text: "<h5>(b) X-Axis Moving Unit</h5><p>Similar to Z-axis movement, X-axis movement would move left/right to find the correct place to paint.</p>"
    right:
      kind: "image"
      image:
        src: "assets/img/portfolio/pixel/Screen Shot 2023-01-17 at 11.36.12 PM.png"
        alt: "X-axis implementation"

  - type: "two-column"
    spaceBefore: "36"
    layout: "1-2"
    left:
      kind: "text"
      text: "<h5>(c) Rotating Color Plate &amp; (d) Pushing Unit</h5><p>When finding the right postition, the plate would rotate to select stamp the right color and the stick would push donw the stamp to paint.</p>"
    right:
      kind: "image"
      image:
        src: "assets/img/portfolio/pixel/Screen Shot 2023-01-17 at 11.36.21 PM.png"
        alt: "Rotating plate and pushing unit"

  - type: "two-column"
    title: "Final Prototype"
    spaceBefore: "50"
    left:
      kind: "text"
      text: "<p>After the first prototype presentation, we reflected our project and made a plan about what we should do next:</p><ul><li>Add a supporting board between z-axis rail and drawing pad</li><li>Change the stamp style and spring to make printing easier</li><li>Integrate wiring connections</li><li>Code implementation for finding the accurate position to paint</li></ul><p>By completing these tasks, we polished our final working prototype, which can select colors and find the correct position to paint pixel patterns.</p><p>[<a href=\"https://drive.google.com/file/d/1PT-jACoj5VUoOtFcVMmlsxacDYfR1-0u/view?usp=sharing\" target=\"_blank\" rel=\"noreferrer\">Link to a short video demo.</a>]</p>"
    right:
      kind: "image"
      image:
        src: "assets/img/portfolio/pixel/Screen Shot 2023-01-08 at 11.45.46 PM.png"
        alt: "Final prototype"

  - type: "image-grid"
    spaceBefore: "36"
    images:
      - src: "assets/img/portfolio/pixel/arduino1.png"
        alt: "Final prototype detail 1"
      - src: "assets/img/portfolio/pixel/arduino2.png"
        alt: "Final prototype detail 2"
featured: true
---
