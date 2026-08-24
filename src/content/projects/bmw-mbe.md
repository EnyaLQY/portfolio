---
title: "BMW - MBE Hardware Prototyping"
category: "Hardware Prototyping"
Topic: "Innovation Project"
timeline: "undisclosed"
summary: ""
heroGallery:
  - src: "assets/img/portfolio/bmw-mbe/PROJECT4.png"
    alt: ""
info:
  role: "UX Prototyper"
  tools: "Coding (Arduino, Android), Protocol engineering (UDP, MQTT)"
blocks:
  - type: "paragraph"
    title: "Overview"
    text: "<br><h5>Rebuilding BMW's MBE concept for local prototyping and stakeholder demonstration.</h5><br>BMW's Innovation team in Germany developed an experimental MBE (Multi-Button Element) concept that integrated physical input with the vehicle's digital interfaces. To enable local testing and stakeholder demonstrations, our Shanghai team was asked to recreate the system using the hardware available locally. The challenge was that the German prototype was built around a highly customized steering-wheel mockup that was significantly different from ours. Many of its components and mechanical structures were also unavailable locally.<br><br>Instead of trying to replicate the German setup exactly, I helped rethink the system around our existing hardware—redesigning the electronics, rethinking the sensing mechanism, and developing custom physical components to create a reusable local prototype."
  - type: "paragraph"
    title: "The Challenge"
    text: "<br><h5>How do we recreate the same interaction on a completely different hardware platform?</h5>The original German prototype had already been carefully engineered around their custom steering wheel. Following their documentation, we initially tried to identify a similar steering-wheel mockup that could be modified locally.<br><br>However, we quickly encountered several constraints:<br><ul><li>The available steering-wheel mockup was significantly smaller.</li><li>The original mechanical structure was not present.</li><li>Several components from the German prototype were unavailable locally.</li><li>Importing a similar customized mockup would be expensive and difficult.</li><li>The prototype needed to remain practical for repeated demonstrations and testing.</li></ul><p>This meant that <strong>replicating the original hardware was not a realistic solution.</strong> We needed to <strong>preserve the interaction concept</strong>, rather than the original implementation.</p>"
  - type: "paragraph"
    title: "Reframing the Problem"
    text: "<p>Instead of asking:<strong> How can we reproduce the German hardware?</strong></p><p>we reframed the problem as:<strong> How can we reproduce the same interaction with the hardware and constraints we have?</strong></p><p>This became the guiding principle for the rest of the project.Our goal was therefore to preserve this interaction flow while redesigning everything underneath it."
  - type: "image"
    image:
      src: "assets/img/portfolio/bmw-mbe/diagram.png"
      alt: ""
  - type: "paragraph"
    title: "Rebuilding the Hardware Architecture"
    text: "<p>The system needed to detect physical input from the MBE and communicate it to the software simulation. However, once we started assembling the hardware, we discovered a fundamental problem: There simply wasn't enough space inside our smaller steering-wheel mockup. The original electronics could not physically fit. Rather than changing the steering wheel again, we redesigned the PCB into a much smaller form factor and selected a smaller rechargeable battery that could be easily removed and replaced.his solved two problems at once:</p><ul><li>Reduced the footprint enough to fit inside the mockup.</li><li>Made the prototype easier to recharge and reuse for future demonstrations.</li><ul>"
  - type: "image"
    image:
      src: "assets/img/portfolio/bmw-mbe/pcb.png"
      alt: ""
  - type: "paragraph"
    title: "Rethinking the Sensor Mechanism"
    text: "<br>The German prototype used an existing lever mechanism inside their steering wheel to physically trigger the sensor. Our steering wheel didn't have this mechanism. There was also not enough space to recreate it. We needed a completely different way to transfer the user's physical input to the sensor. <br><br>We introduced two small pieces of rubber between the smartwatch and the sensor. When the user pressed the MBE, the deformation of the rubber transferred pressure to the sensor while requiring very little physical space. But this solution introduced a new challenge: How much rubber was enough?</p><ul><li>Too thick or too large: the button became difficult to press → the sensor could trigger too easily</li><li>Too thin or too small: insufficient pressure reached the sensor → inputs became unreliable</li></ul>We iterated through multiple rubber sizes and configurations to find the right balance between available space, tactile response, and sensor sensitivity. This became one of the most iterative parts of the project."
  - type: "image"
    image:
      src: "assets/img/portfolio/bmw-mbe/sensor.png"
      alt: ""  
  - type: "paragraph"
    title: "Designing the Physical MBE"
    text: "<br>Once the sensing mechanism was working, we needed to integrate the smartwatch into a usable physical interface. The bottom of the watch was not flat, so simply attaching it to the steering wheel wasn't practical. Thus, we designed and 3D-printed an external housing and internal structural support.The watch also needed to be removed frequently for charging. So instead of permanently attaching it, we introduced a magnetic mounting mechanism, combined with a custom snap-fit structure. This allowed the watch to: <ul><br><li>Stay securely attached during interaction</li><li>Be quickly removed when needed</li><li>Be reinstalled without realignment</li></ul>During development, we experimented with a transparent enclosure because it made the internal mechanism much easier to inspect and debug. However, once the system was stable, we switched to a solid black enclosure for stakeholder demonstrations. This was a small but important design decision: <strong>The prototype needed to function as both a development tool and a convincing demonstration artifact.</strong> For remote debugging and control, we also used ADB commands to operate the Android smartwatch without physically interacting with it."
  - type: "image"
    image:
      src: "assets/img/portfolio/bmw-mbe/mbe.png"
      alt: ""  
  - type: "two-column"
    title: "Connecting Hardware to the Digital Experience"
    layout: "2-1"
    left:
      kind: "text"
      text: "<br>Once the hardware could reliably detect input, the final challenge was translating that physical interaction into the existing software system. The smartwatch provided touch coordinates corresponding to:<ul><br><li>Four directional inputs</li><li>One confirmation input</li></ul>By reading these coordinates through Android code, we could determine which MBE action the user had performed. The input was then translated into signals that could control the other simulation components, including the Driving Display and Panoramic Vision. Rather than rebuilding the software architecture from scratch, I recompiled and adapted the existing code from the German team, simplifying the coordinate-detection logic so that it worked with our redesigned hardware solution. This allowed us to preserve the original interaction logic while adapting the implementation to our new physical setup."
    right:
      kind: "image"
      image:
        src: "assets/img/portfolio/bmw-mbe/coordinate.png"
  - type: "paragraph"
    title: "Final Result & Reflection"
    text: "<br>We successfully localized the German MBE system for the Shanghai team, creating a compact and reusable prototype that could reliably detect physical input and trigger the corresponding vehicle HMI simulations. The system was used for software testing and stakeholder demonstrations, without relying on the original German hardware setup.<br><br>More importantly, the project <strong>strengthened my ability to approach unfamiliar problems through iterative prototyping and cross-disciplinary problem solving</strong>. From redesigning the electronics and sensing mechanism to adapting the software and physical enclosure, I learned to work within real-world constraints while keeping the intended user experience at the center. It also reinforced my belief that prototyping is not about simply reproducing an existing solution, but about <strong>finding the right way to make an experience tangible, testable, and convincing.</strong>"
  - type: "paragraph"
    text: "<br><br><br><strong>Disclaimer:</strong> All materials are presented solely to demonstrate design thinking and process, and do not represent the actual product."
featured: true
---
