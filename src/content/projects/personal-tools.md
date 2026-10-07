---
title: "Personal Tools & Experiments"
category: "Web Development & AI-Assisted Prototyping"
timeline: "2026 - Ongoing"
summary: "A growing set of self-directed React and TypeScript tools, built quickly with AI-assisted development and refined through hands-on use."
heroGallery:
  - src: "assets/img/portfolio/personal-tools/coverimg.png"
    alt: "A colorful desktop sticky-notes interface beside a fitness-planning dashboard"
info:
  role: "Designer & Developer"
  tools: "React, TypeScript, AI-assisted development tools"
blocks:
  - type: "paragraph"
    title: "Background"
    paragraphs:
      - "<strong>Self-initiated tools are a way to practice product thinking at the scale of everyday habits.</strong> This collection follows small utilities I am building for myself, from capturing a thought at the desktop to making a workout plan easier to begin."
      - "React and TypeScript provide the product foundation; AI-assisted tools accelerate scaffolding, debugging, and iteration. I remain responsible for framing the problem, reviewing each interaction, and deciding what is ready to keep."

  - type: "project-switcher"
    intro: "<strong>Click a project to explore more</strong>"
    items:
      - id: "sticky-notes"
        icon: "bi bi-stickies"
        status: "Completed - 1 DAY"
        title: "Desktop Sticky Notes"
        summary: "A lightweight Windows utility for notes, time awareness, and everyday reminders."
        sections:
          - type: "paragraph"
            title: "What I Needed"
            paragraphs: 
              - "I started by defining a few needs based on my own daily routine:"
          - type: "card-grid"
            layout: "5"
            items:
              - icon: "bi bi-sticky"
                title: "Quick notes"
                description: "Capture short reminders without opening a separate workspace."
              - icon: "bi bi-stopwatch"
                title: "Medication timer"
                description: "Make time since the last dose immediately legible through a count-up state."
              - icon: "bi bi-hourglass-split"
                title: "Upcoming events"
                description: "Bring the next commitment forward with an at-a-glance countdown."
              - icon: "bi bi-globe2"
                title: "Multiple time zones"
                description: "Compare local time with relevant regions in the same lightweight view."
              - icon: "bi bi-layers"
                title: "Adjustable transparency"
                description: "Balance note legibility with visibility of the desktop background."
          - type: "two-column"
            layout: "1-2"
            left:
              kind: "text"
              paragraphs:
                - "The goal was simple: keep the information I check frequently always within reach, while making the interface feel calm, minimal, and unobtrusive."
                - "Therefore, I hid action buttons until hover, allowing the interface to stay clean while keeping actions accessible. The window also adapts its height dynamically as content changes."
            right:
              kind: "image"
              image:
                src: "assets/img/portfolio/personal-tools/lo-fi.png"
                alt: "Research informing the AI launcher opportunity"
          - type: "paragraph"
            title: "From Low-fi to Working App"
            paragraphs: 
              - "The low-fidelity flow became a clear brief for AI-assisted scaffolding. I then iterated directly in the product, moving from a functional baseline toward a deliberate desktop interaction model."
          - type: "card-grid"
            layout: "4"
            items:
              - icon: "bi bi-layout-text-window-reverse"
                label: "01"
                title: "Low-fidelity UI"
                description: "Mapped priority content, core states, and the first interaction flow in Figma."
              - icon: "bi bi-lightning"
                label: "02"
                title: "AI baseline"
                description: "Used the low-fi flow as a structured input for a React and TypeScript foundation."
              - icon: "bi bi-tools"
                label: "03"
                title: "Interaction refinement"
                description: "Refined responsive motion, progressive-disclosure controls, and state-specific behaviour."
              - icon: "bi bi-display"
                label: "04"
                title: "Windows package"
                description: "Packaged the product as a runnable Windows desktop application."
          - type: "two-column"
            layout: "1-2"
            left:
              kind: "text"
              paragraphs:
                - "<h5>First Iteration</h5>"
                - "The first build felt too much like a traditional app, with unnecessary controls competing for attention. I hid secondary actions, fixed time-zone logic, reused components for count-up timers, and introduced responsive height to keep the widget compact and focused"
                - "<strong>Result</strong>: A cleaner, more flexible interface that keeps essential information visible while reducing unnecessary visual weight."
            right:
              kind: "image"
              image:
                src: "assets/img/portfolio/personal-tools/1stiteration.png"
                alt: "Research informing the AI launcher opportunity"
          - type: "two-column"
            layout: "1-2"
            left:
              kind: "text"
              paragraphs:
                - "<h5>Second Iteration</h5>"
                - "Daily use revealed new needs around scalability, readability, and persistence. I added clearer timer indicators, scrolling, time-zone calibration, and launch-on-startup — turning the prototype into a more practical always-on desktop tool."
                - "<strong>Result</strong>: The prototype evolved from a functional utility into an always-on desktop tool designed around real daily use."
            right:
              kind: "image"
              image:
                src: "assets/img/portfolio/personal-tools/2nditeration.png"
                alt: "Research informing the AI launcher opportunity"
          - type: "paragraph"
            title: "Long-run Validation"
            paragraphs: 
              - "Release was treated as the beginning of validation. I kept the tool running in its intended desktop context to identify friction that only emerges over time and feed it back into the next iteration."
          - type: "card-grid"
            layout: "2"
            items:
              - icon: "bi bi-graph-up"
                label: "Observe"
                title: "Run it in context"
                description: "Observe behaviour during normal desktop use rather than treating packaging as the finish line."
              - icon: "bi bi-arrow-repeat"
                label: "Improve"
                title: "Stabilize over time"
                description: "Tune motion behaviour and packaging settings to support reliable extended use."
          - type: "image-grid"
            images:
              - src: "assets/img/portfolio/personal-tools/validation-01.gif"
                alt: "Sticky Notes long-run validation: motion behavior"
                caption: "Responsive height adjustment"
                maxWidth: "80%"

              - src: "assets/img/portfolio/personal-tools/validation-02.gif"
                alt: "Sticky Notes long-run validation: hidden controls"
                caption: "Schedule editing & refreshing"
                maxWidth: "80%"

              - src: "assets/img/portfolio/personal-tools/validation-03.gif"
                alt: "Sticky Notes long-run validation: desktop transparency"
                caption: "Opacity changing & Widget Minimizing"
                maxWidth: "80%"
          

      - id: "fitness-generator"
        icon: "bi bi-graph-up"
        status: "In progress"
        title: "Fitness Plan Generator"
        summary: "An adaptive planning tool that turns goals and constraints into a usable workout routine."
        sections:
          - type: "paragraph"
            paragraphs:
              - "<strong>The Fitness Plan Generator is the next experiment in this collection.</strong> It tests how a person’s goals, availability, preferences, and confidence can become a practical workout plan that remains easy to understand and adapt."
          - type: "card-grid"
            title: "Current Focus"
            intro: "The first design question is how to turn a small set of personal constraints into a plan that feels specific enough to follow, but flexible enough to evolve with real routines."
            introWidth: "half"
            layout: "2"
            items:
              - icon: "bi bi-sliders"
                label: "Input"
                title: "Personal constraints"
                description: "Turn goals, schedule, available equipment, and preferences into clear planning inputs."
              - icon: "bi bi-calendar-check"
                label: "Output"
                title: "A flexible weekly plan"
                description: "Present a usable weekly routine with sensible defaults and straightforward adjustment."
featured: true
---
