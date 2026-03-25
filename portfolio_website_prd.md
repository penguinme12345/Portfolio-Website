# Product Requirements Document

## Product Name

Vista Portfolio: AI-Powered Personal Portfolio Website

## Document Status

Draft v1

## Prepared For

Personal portfolio website for showcasing coding projects, GitHub work, and SolidWorks/mechanical design projects.

## 1. Product Overview

### Summary

Vista Portfolio is a personal portfolio website designed to feel like the Windows Vista home screen and desktop experience, while functioning as a modern showcase for technical, engineering, and creative work. The website will present coding projects, GitHub links, and SolidWorks projects inside a nostalgic operating-system-inspired interface.

The defining feature is an AI helper that serves two roles:

1. Project guide: answers questions about projects, skills, tools used, design decisions, outcomes, and relevant links.
2. Navigation assistant: helps visitors move through the website by taking requests like "show me your Python projects," "open your GitHub," or "take me to your SolidWorks work."

The product should feel memorable, interactive, and polished rather than like a standard template portfolio.

### Product Vision

Create a portfolio that immediately communicates:

- technical ability
- design personality
- engineering range across software and hardware/CAD work
- strong storytelling around projects
- thoughtful use of AI in a way that is useful, not gimmicky

### Core Value Proposition

Most portfolio sites look similar. This product stands out by combining:

- a distinctive Windows Vista-inspired visual identity
- structured project storytelling
- a conversational AI layer for discovery and navigation
- support for both software and SolidWorks project presentation in one unified experience

## 2. Goals and Success Criteria

### Primary Goals

- Showcase coding and engineering work in a memorable way
- Make it easy for recruiters, collaborators, and hiring managers to explore projects
- Highlight both software development and SolidWorks/CAD skills
- Use an AI assistant to reduce friction when browsing the site
- Establish a strong personal brand through a recognizable OS-inspired interface

### Secondary Goals

- Increase GitHub profile visits
- Encourage direct contact for interviews, freelance work, or collaborations
- Make the site flexible enough to add new projects over time
- Provide a structure that can later support blog posts, resume downloads, and case studies

### Success Metrics

- Visitors can identify the site owner, skill areas, and project categories within 10 seconds
- Visitors can reach any major section of the site in 3 clicks or fewer
- At least 80% of project pages contain clear outcomes, tech stack, visuals, and links
- AI assistant successfully answers common project and navigation questions with high accuracy
- Increased click-through rate to GitHub, resume, and contact actions
- Positive qualitative feedback that the site is memorable and easy to explore

## 3. Problem Statement

### User Problem

Traditional portfolio websites often:

- feel generic
- bury the most impressive work
- separate software and engineering work too much
- make visitors scan manually for important details
- do not help visitors understand the story behind a project

Visitors want fast answers to questions such as:

- What kind of developer or engineer is this person?
- What are their strongest projects?
- What tools and technologies have they used?
- Do they have practical, finished work?
- Can I quickly see their GitHub or relevant case studies?

### Opportunity

By presenting projects inside a Vista-like interface and pairing the UI with an AI helper, the site can turn passive browsing into guided exploration. This makes the portfolio feel like an interactive product demo instead of a static resume site.

## 4. Target Audience

### Primary Audience

- Recruiters screening technical candidates
- Hiring managers evaluating project depth
- Engineering managers assessing software and design versatility
- Internship/co-op reviewers

### Secondary Audience

- Freelance clients
- Collaborators and peers
- Friends, classmates, and instructors
- Designers/engineers interested in CAD or SolidWorks work

### Audience Needs

- Quick understanding of who you are and what you build
- Easy access to strongest projects
- Visual proof of work quality
- Confidence that the site owner can explain technical decisions
- A clear way to contact you or view GitHub

## 5. Product Principles

- Distinctive, not gimmicky: the Vista inspiration should be recognizable without making the site hard to use
- Interactive, not distracting: animations and OS metaphors should support discovery
- Structured, not cluttered: each project should follow a consistent presentation model
- Helpful AI, not chat for chat’s sake: the assistant must provide real value
- Fast and accessible: the site must still perform well and remain usable on modern devices

## 6. Experience Vision

### Concept

The homepage should feel like landing on a stylized Windows Vista desktop or start environment. Users should see a polished interface with glossy surfaces, soft gradients, rounded panels, glass-like effects, icons, and subtle motion. The website should feel like a desktop environment where different areas of the portfolio open like windows or applications.

### Emotional Goals

The site should feel:

- nostalgic
- creative
- technically polished
- playful but professional
- surprisingly immersive

### User Impression Goals

Within the first minute, the visitor should think:

- "This is different from a standard portfolio."
- "This person has both technical skill and taste."
- "The AI helper is actually useful."
- "I can quickly find what I care about."

## 7. Scope

### In Scope for V1

- Vista-inspired homepage and navigation system
- About/profile section
- Coding projects section
- GitHub section or GitHub integration
- SolidWorks projects section
- Resume and contact links
- AI helper for project Q&A and website navigation
- Project detail pages or modal windows
- Responsive design for desktop and mobile
- Admin-friendly content structure for adding projects

### Out of Scope for V1

- Full blog/CMS publishing workflow
- User accounts
- Saved chat history per visitor
- Advanced analytics dashboard
- Full voice assistant support
- Real-time GitHub contribution graph syncing beyond lightweight integrations
- 3D live CAD viewers if they slow the experience significantly

## 8. User Stories

### Recruiter Stories

- As a recruiter, I want to quickly understand what kind of work the portfolio owner does so I can assess fit fast.
- As a recruiter, I want to open key projects without digging through too many pages.
- As a recruiter, I want an easy way to reach GitHub, resume, and contact information.

### Hiring Manager Stories

- As a hiring manager, I want to see project depth, tools used, and outcomes so I can judge practical ability.
- As a hiring manager, I want to ask the AI assistant questions like "Which projects used Python?" and get a clear answer.
- As a hiring manager, I want to compare coding work and CAD work in one place.

### General Visitor Stories

- As a visitor, I want the site to be visually interesting without being confusing.
- As a visitor, I want to navigate the portfolio like an interactive desktop.
- As a visitor, I want the AI to guide me to sections I care about.

### Owner Stories

- As the site owner, I want to add or update projects without redesigning the site each time.
- As the site owner, I want the AI assistant to answer based on my real project content.
- As the site owner, I want the site to make my work feel cohesive across software and SolidWorks.

## 9. Information Architecture

### Top-Level Sections

- Home
- About Me
- Coding Projects
- SolidWorks Projects
- GitHub
- Resume
- Contact
- AI Assistant

### Suggested Interface Metaphor

The website uses a desktop/application metaphor:

- desktop/home screen acts as the landing page
- dock, sidebar, start-menu, or shortcut icons open sections
- projects open in "windows"
- AI assistant appears as a persistent helper panel or floating app
- quick actions provide direct links to GitHub, resume, and contact

### Suggested Section Behavior

#### Home/Desktop

- Personal introduction
- Signature background scene inspired by Vista
- Shortcut icons to main categories
- AI helper entry point
- Featured projects window or rotating preview

#### About Window

- Short intro
- Background and interests
- Skills overview
- Optional timeline or journey highlights

#### Coding Projects Window

- Grid or stacked cards of software projects
- Filters by language, framework, category, or type
- Each card opens deeper detail

#### SolidWorks Window

- Gallery of CAD/mechanical projects
- Project previews with renders, screenshots, process images
- Optional categories such as assemblies, parts, or design challenges

#### GitHub Window

- GitHub profile link
- Highlighted repositories
- Recent work or pinned projects
- Optional stats and contribution summary

#### Contact/Resume Window

- Resume download/view button
- Email
- LinkedIn if applicable
- GitHub
- Clear CTA

## 10. Functional Requirements

### 10.1 Homepage / Desktop Experience

The homepage must:

- load with a strong Vista-inspired visual identity
- include a main hero/introduction area
- provide immediate access to key sections
- include a visible AI assistant trigger
- feature at least 2 to 4 highlighted projects
- communicate both coding and SolidWorks skill areas

### 10.2 Project Listings

The website must support at least two project categories:

- Coding Projects
- SolidWorks Projects

Each category listing should support:

- thumbnail or preview image
- project title
- short description
- tools/stack tags
- link to more details
- featured status

### 10.3 Project Detail Experience

Each project detail view should support:

- title
- category
- short summary
- problem statement
- role/responsibility
- tools and technologies used
- development/design process
- screenshots or images
- outcomes/results
- GitHub/demo/file links when available
- AI-readable structured metadata

### 10.4 GitHub Integration

The site should include GitHub in one or more of the following ways:

- prominent GitHub profile button
- highlighted repositories
- pinned project cards
- data pulled manually or via GitHub API

The implementation should degrade gracefully if API rate limits or fetch failures occur.

### 10.5 AI Assistant

The AI assistant is a core product feature, not a side widget.

#### Primary Functions

- answer questions about projects
- summarize experience by category or tool
- recommend what to view next
- navigate the website through conversational commands
- explain project differences
- help visitors find GitHub, resume, and contact information

#### Example Questions

- "What projects did you build with Python?"
- "Show me your best frontend project."
- "Do you have any CAD or SolidWorks work?"
- "Which project is most relevant to robotics?"
- "Open your GitHub."
- "Take me to the contact page."
- "What technologies do you use most?"

#### AI Assistant Requirements

- must understand all live project entries and their metadata
- must answer based on approved site content, not make up details
- must support navigation intents and trigger section changes
- must return concise, readable answers
- must offer clickable suggestions or follow-up actions
- must indicate when information is unavailable
- must have a fallback message for unsupported questions

#### AI Interaction Modes

- informational mode: answers content questions
- guide mode: suggests where to go next
- command mode: navigates to sections or opens project windows

#### AI Trust and Safety Requirements

- no hallucinated project facts
- no claims beyond the provided content source
- no collecting personal visitor data beyond what is necessary
- clear notice that the assistant is trained on site/project content

### 10.6 Navigation

The navigation system should support:

- desktop-style point-and-click exploration
- traditional fallback navigation for accessibility/usability
- AI-driven navigation commands
- breadcrumb or state clarity when sections/windows are open

### 10.7 Search and Filtering

The site should support structured discovery through:

- search by keyword
- filter by project type
- filter by technology/tool
- filter by featured/recent

AI may complement but should not replace standard filtering.

### 10.8 Responsive Design

The site must work well on:

- desktop browsers
- tablets
- mobile phones

On smaller screens, the Vista metaphor may simplify into cards/panels while preserving the same branding.

### 10.9 Content Management

The site should allow straightforward updates by editing a structured content source such as:

- JSON
- Markdown
- CMS-backed content objects

At minimum, each project should be manageable from one structured source of truth.

## 11. AI Assistant Product Design

### Assistant Persona

The assistant should feel:

- helpful
- clear
- slightly polished/OS-native
- concise and guided
- aligned with your personal brand

It should not feel overly corporate or robotic.

### UI Placement Options

Recommended primary option:

- persistent assistant panel anchored to the lower-right or styled like a sidebar gadget/window

Alternative options:

- "Help & Search" start-menu style assistant
- floating translucent chat window
- desktop sidebar module inspired by Vista gadgets

### Response Style

- short default answers
- optionally expandable detail
- action-oriented suggestions
- direct link buttons after most responses

Example:

"You have 3 Python-related projects. The strongest match is X because it uses Y and Z. Want me to open it?"

### AI Knowledge Source

The assistant should answer from:

- project metadata
- project descriptions
- about/profile content
- selected links and section definitions

Recommended architecture:

- structured project data as the first retrieval layer
- optional lightweight retrieval over markdown/project case studies
- defined navigation actions mapped to site routes/components

### AI Failure Handling

If the assistant cannot answer, it should:

- say it does not have enough information
- suggest nearby topics
- offer to open a relevant section instead

## 12. Visual and UX Requirements

### Visual Direction

The website should strongly reference Windows Vista aesthetics without copying the OS literally.

#### Core Visual Traits

- glossy translucent panels
- glassmorphism with restraint
- rounded corners
- soft gradients
- blue/teal/green atmospheric tones
- luminous highlights
- layered wallpapers/background environments
- polished iconography
- subtle reflections and shadows

#### Possible Visual Elements

- aurora/light streak background inspired by Vista wallpapers
- desktop icons with hover glow
- glass windows with title bars
- sidebar widgets/gadgets
- soft animated light movement
- start-button inspired navigation entry point

### UX Requirements

- visitors must never feel lost in the interface
- windows/panels should be easy to close, switch, and reopen
- the nostalgic interface must not reduce readability
- interactive effects should feel smooth and premium
- key CTAs must remain obvious

### Accessibility Requirements

- WCAG-friendly color contrast for text and controls
- keyboard navigation support
- visible focus states
- semantic structure for screen readers
- reduced motion option
- all AI actions available through standard navigation too

## 13. Content Requirements

### About Content

- short personal introduction
- 1 to 2 paragraph background story
- key interests and specialties
- photo or avatar optional

### Project Content Template

Each project should include:

- title
- category
- short teaser
- full summary
- objective/problem
- tools/stack
- responsibilities
- process
- challenges
- results
- media assets
- external links

### SolidWorks Content Notes

Because SolidWorks work is visually driven, each project should ideally include:

- render or screenshot
- short explanation of the design
- purpose/use case
- constraints or engineering considerations
- design decisions
- outcome or learning

## 14. Technical Requirements

### Recommended Frontend Stack

Preferred options:

- Next.js
- React
- TypeScript
- Tailwind CSS or custom CSS system for polished visual control
- Framer Motion or similar for controlled animation

### Recommended AI Stack

Possible implementation approach:

- OpenAI API for assistant responses
- server-side route for chat requests
- structured project dataset used as context
- intent/action layer for navigation commands

### Suggested Technical Architecture

#### Frontend

- OS-inspired shell layout
- window manager component for panels/views
- section routing and deep linking
- reusable project card/detail components

#### Backend / Server Functions

- AI chat endpoint
- optional GitHub data fetch endpoint
- content ingestion layer for project data

#### Data Layer

- local structured content files for projects
- optional markdown case studies
- optional cached GitHub repository metadata

### Performance Requirements

- homepage should load quickly despite rich visuals
- animations should not cause lag on mid-range devices
- images should be optimized
- AI calls should feel responsive with loading states

### SEO Requirements

- descriptive metadata for homepage and projects
- semantic headings
- crawlable fallback structure beyond interactive UI
- project pages/URLs indexable where appropriate

## 15. Content and Data Model

### Project Data Fields

Recommended fields per project:

- id
- title
- slug
- category
- featured
- shortDescription
- fullDescription
- problem
- solution
- role
- tools
- technologies
- tags
- year
- status
- thumbnail
- gallery
- githubUrl
- liveUrl
- externalUrl
- aiSummary
- relatedProjects

### Navigation Intent Model

The AI/navigation layer should be able to map phrases into actions such as:

- open_section
- open_project
- filter_projects
- show_contact
- show_resume
- open_github
- recommend_project

## 16. Non-Functional Requirements

- reliable on major modern browsers
- accessible and readable
- maintainable content structure
- easy to extend with new projects
- secure handling of AI endpoint keys and rate limits
- graceful fallback when AI service is unavailable

## 17. Risks and Mitigations

### Risk: Nostalgic UI becomes too gimmicky or hard to use

Mitigation:

- maintain a modern information hierarchy under the Vista skin
- test navigation clarity with a few users
- ensure standard navigation exists beneath the OS metaphor

### Risk: AI assistant gives incorrect answers

Mitigation:

- ground answers in structured project data
- keep assistant scope narrow
- add clear fallbacks for unknown questions
- avoid freeform claims outside content source

### Risk: Site becomes visually heavy and slow

Mitigation:

- optimize assets
- limit overuse of blur/shadow effects
- lazy-load non-critical media
- keep animation intentional and lightweight

### Risk: SolidWorks projects are harder to present than coding projects

Mitigation:

- define a dedicated template for CAD/mechanical project storytelling
- prioritize visuals and design context
- include process and constraint summaries

## 18. MVP Definition

The MVP should include:

- Vista-inspired landing page
- About section
- 4 to 8 coding projects
- 2 to 5 SolidWorks projects
- GitHub link/integration
- Resume/contact section
- AI assistant with project Q&A and site navigation support
- responsive layout

The MVP does not require:

- advanced CMS
- user analytics dashboards
- voice mode
- complex multi-agent AI workflows

## 19. Phased Roadmap

### Phase 1: Foundation

- define brand direction and content structure
- collect project assets and descriptions
- build wireframes and visual system

### Phase 2: Core Experience

- build desktop-style shell and navigation
- implement project listing/detail flows
- integrate GitHub and contact areas

### Phase 3: AI Assistant

- create project knowledge schema
- implement assistant UI
- support Q&A and navigation intents
- test accuracy and fallback behavior

### Phase 4: Polish and Launch

- optimize animations and responsiveness
- improve accessibility and SEO
- test on desktop/mobile
- finalize content

## 20. Acceptance Criteria

The product will be considered ready for initial launch when:

- homepage clearly communicates your identity and focus areas
- project categories are easy to discover and browse
- project detail views are complete and consistent
- AI assistant answers common project questions accurately
- AI assistant can navigate to major sections reliably
- GitHub, contact, and resume actions are highly visible
- site performs well on modern desktop and mobile devices
- Vista-inspired aesthetic is strong but does not harm usability

## 21. Open Questions

- Should the AI assistant answer only from portfolio content, or also from live GitHub repository data?
- Should project detail views behave like routed pages, draggable windows, or both?
- Should SolidWorks projects include downloadable files, or just images/case studies?
- Do you want the tone of the site to lean more professional, nostalgic, or playful?
- Should there be a hidden "easter egg" layer tied to the OS concept, or should the experience stay more minimal?

## 22. Recommended Next Deliverables

After this PRD, the next recommended artifacts are:

- site map
- wireframes
- visual moodboard
- content schema
- technical architecture plan
- implementation backlog

## 23. Build Recommendation

Recommended product direction for V1:

- Build the site in Next.js with a structured project content layer.
- Use a windowed desktop metaphor for the main experience.
- Make the AI assistant a first-class feature with both Q&A and navigation support.
- Keep the experience visually rich but operationally simple.
- Ground all assistant answers in curated project metadata for accuracy.

This direction gives you a site that is unique, practical to build, and strong enough to impress both technical and non-technical reviewers.
