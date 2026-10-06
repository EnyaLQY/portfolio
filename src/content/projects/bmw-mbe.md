---
title: "BMW - MBE Hardware Prototyping"
category: "Hardware Prototyping"
Topic: "Innovation Project"
timeline: "Undisclosed"
summary: "Localized BMW's Multi-Button Element concept as a compact, reusable hardware prototype for interaction testing and stakeholder demonstrations."
heroGallery:
  - src: "assets/img/portfolio/bmw-mbe/PROJECT4.png"
    alt: "BMW MBE hardware prototype on a steering-wheel mockup"
info:
  role: "UX Prototyper"
  tools: "Arduino, Android, UDP, MQTT, 3D Printing"
blocks:
  - type: "paragraph"
    title: "Project Background"
    paragraphs:
      - "<strong>How might we recreate BMW's MBE interaction concept when the original prototype, components, and steering-wheel architecture are unavailable locally?</strong>"
      - "BMW's Innovation team in Germany developed an experimental Multi-Button Element (MBE) that combined physical input with the vehicle's digital interfaces. For local testing and stakeholder demonstrations, the Shanghai team needed a functional version built from the hardware available to us."
      - "The original setup was designed around a highly customized steering-wheel mockup. Rather than copy its form exactly, I helped translate its interaction logic into a compact, reusable local prototype."

  - type: "card-grid"
    layout: "3"
    items:
      - label: "Constraint 01"
        title: "Different form factor"
        description: "The locally available steering-wheel mockup was substantially smaller than the original and could not accommodate its internal structure."
      - label: "Constraint 02"
        title: "Missing components"
        description: "Several mechanical parts and customized components from the German prototype were unavailable for local sourcing."
      - label: "Constraint 03"
        title: "Demonstration-ready"
        description: "The outcome had to remain dependable, rechargeable, and practical for repeated testing and stakeholder demos."

  - type: "paragraph"
    title: "Reframing the Problem"
    paragraphs:
      - "The initial question was not <strong>“How can we reproduce the German hardware?”</strong> It became: <strong>“How can we preserve the same interaction with the hardware and constraints we have?”</strong>"
      - "This shift gave the team permission to redesign the electronics, sensing mechanism, and physical enclosure while keeping the intended interaction flow intact."

  - type: "image"
    image:
      src: "assets/img/portfolio/bmw-mbe/diagram.png"
      alt: "MBE hardware and digital interaction architecture"
      caption: "The local architecture preserved the original input-to-HMI interaction flow while replacing the unavailable physical implementation."
      maxWidth: "100%"

  - type: "paragraph"
    title: "Prototype Development"
    paragraphs:
      - "The work progressed through two connected hardware tracks: making the electronics fit the new steering wheel, then turning the smartwatch into a reliable and maintainable physical control."

  - type: "process-grid"
    layout: "1x2"
    approaches:
      - label: "Iteration 01"
        title: "Miniaturize the electronics"
        description: "The original PCB and battery could not fit inside the smaller mockup. I redesigned the electronics around a smaller PCB and a removable rechargeable battery."
        steps:
          - "Measure usable interior space"
          - "Reduce the PCB footprint"
          - "Select a compact removable battery"
          - "Validate fit and repeatable charging"
        image:
          src: "assets/img/portfolio/bmw-mbe/pcb.png"
          alt: "Compact PCB and battery hardware prototype"
          caption: "A reduced electronics footprint made the prototype fit inside the local steering-wheel mockup."
      - label: "Iteration 02"
        title: "Make physical input dependable"
        description: "Without the original lever mechanism, I designed a compact rubber-coupling solution and a removable 3D-printed MBE housing for stable input and easier maintenance."
        steps:
          - "Test rubber size and pressure transfer"
          - "Tune tactile response and sensor sensitivity"
          - "Design the internal support structure"
          - "Add magnetic, snap-fit mounting"
        image:
          src: "assets/img/portfolio/bmw-mbe/mbe.png"
          alt: "3D-printed BMW MBE smartwatch housing"
          caption: "The final enclosure balanced secure mounting, quick removal for charging, and a presentation-ready finish."

  - type: "paragraph"
    title: "Sensor Tuning"
    paragraphs:
      - "The original prototype used an internal lever to trigger its sensor, but the local mockup had neither the mechanism nor enough room to recreate it. Two small rubber pieces between the smartwatch and sensor became a compact pressure-transfer layer."
      - "This required careful iteration: too much material made the button difficult to press or overly sensitive; too little produced unreliable input. The final configuration balanced available space, tactile feedback, and trigger reliability."

  - type: "image"
    image:
      src: "assets/img/portfolio/bmw-mbe/sensor.png"
      alt: "Rubber-coupled sensor mechanism for the MBE prototype"
      caption: "A compact rubber interface translated physical press force to the sensor without recreating the original lever assembly."
      maxWidth: "100%"

  - type: "two-column"
    title: "Connecting Hardware to the Digital Experience"
    layout: "2-1"
    left:
      kind: "text"
      paragraphs:
        - "Once hardware input was reliable, the final task was translating it into the existing vehicle-HMI simulation. The smartwatch exposed touch coordinates for four directional inputs and one confirmation action."
        - "I adapted the German team's existing Android code to interpret those coordinates on the redesigned hardware, then passed the resulting signals to the Driving Display and Panoramic Vision simulations. This retained the original interaction logic without rebuilding the software system from scratch."
    right:
      kind: "image"
      image:
        src: "assets/img/portfolio/bmw-mbe/coordinate.png"
        alt: "Smartwatch touch-coordinate mapping for MBE controls"

  - type: "paragraph"
    title: "Outcome & Reflection"
    paragraphs:
      - "The Shanghai team received a compact, reusable MBE prototype that reliably detected physical input and controlled the target HMI simulations. It supported both software testing and stakeholder demonstrations without depending on the original German hardware."
      - "<h5>Prototype for the real context</h5>"
      - "The key outcome was not an exact replica. It was a credible interaction prototype shaped around local tools, constraints, and maintenance needs."
      - "<h5>Make interaction tangible</h5>"
      - "The project reinforced that prototyping is a cross-disciplinary practice: electronics, mechanics, code, and experience design all need to work together before an interaction can be tested and believed."

  - type: "paragraph"
    paragraphs:
      - "<strong>Disclaimer:</strong> All materials are presented solely to demonstrate design thinking and process, and do not represent the actual product."
featured: true
---
