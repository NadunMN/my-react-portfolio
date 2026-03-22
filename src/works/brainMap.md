
**BrainMap** is a comprehensive web platform that connects project teams with verified domain experts (mentors) for personalized guidance, while providing powerful built-in collaboration tools -- real-time chat, Kanban boards, video meetings, a community forum, calendar scheduling, and an integrated payment gateway. It's designed to help any project succeed by bridging the gap between people who need expert advice and professionals willing to share their knowledge.

---

## The Problem It Solves
Finding the right mentor for a specific project domain is difficult. Even when you find one, coordinating communication, managing tasks, handling payments, and tracking progress typically requires juggling multiple disconnected tools. BrainMap solves this by combining **expert discovery, project management, real-time communication, and secure payments** into a single, role-based platform.

---
## Tech Stack
| Layer | Technology |
|---|---|
| **Frontend** | Next.js 15 (App Router, Turbopack), React 19, TypeScript |
| **UI & Styling** | Tailwind CSS 4, Radix UI primitives, shadcn/ui components, Framer Motion, Lucide & FontAwesome icons |
| **Backend** | Java 21, Spring Boot 3.5, Spring Security, Spring Data JPA |
| **Database** | PostgreSQL (with Hibernate & HikariCP connection pooling) |
| **Authentication** | Supabase Auth (JWT-based), custom JWT filter on the backend |
| **Real-Time** | WebSockets via STOMP (SockJS) for chat & notifications |
| **Video Calls** | Jitsi Meet integration for video meetings |
| **Payments** | PayHere payment gateway (sandbox + live modes) |
| **API Docs** | SpringDoc OpenAPI / Swagger UI |
| **Build Tools** | Maven (backend), npm (frontend) |
| **Other Libraries** | MapStruct (object mapping), Lombok, Recharts (data visualization), react-day-picker, react-markdown, Axios, date-fns |
---
## Architecture Overview
BrainMap follows a classic **client-server architecture** with clear separation of concerns:
```
                    +---------------------+
                    |   Next.js Frontend  |
                    |  (React 19 + TS)    |
                    +----------+----------+
                               |
                    REST API + WebSocket (STOMP/SockJS)
                               |
                    +----------+----------+
                    | Spring Boot Backend |
                    |  (Java 21 + JPA)    |
                    +----------+----------+
                               |
                    +----------+----------+
                    |     PostgreSQL       |
                    +---------------------+
                               |
             +-----------------+-----------------+
             |                 |                 |
       Supabase Auth     PayHere Gateway    Jitsi Meet
       (JWT tokens)      (Payments)         (Video calls)
```
**Backend layers:**
- **Controllers** -- REST endpoints organized by domain (25 controllers)
- **Services** -- Business logic layer (25+ services)
- **Repositories** -- Spring Data JPA for database access
- **Domain** -- JPA entities, DTOs (Java Records), enums
- **Mappers** -- MapStruct-based converters between DTOs and entities
- **Security** -- JWT authentication filter, channel interceptors for WebSocket auth
**Frontend structure:**
- **App Router** -- Next.js 15 file-based routing with layouts per role
- **Services layer** -- Centralized API modules (Axios) for admin, community, payments, projects, etc.
- **Contexts** -- React Context for auth state management
- **Components** -- Reusable UI library (modals, sidebars, tables, chat, calendar, video-call, payment)
---
## User Roles & Access Control
BrainMap implements a **role-based access system** with four distinct user types:
| Role | Description |
|---|---|
| **Admin** | Platform oversight -- user management, project moderation, analytics dashboard, transaction monitoring, user account creation (including moderators) |
| **Moderator** | Content moderation -- reviews domain expert verification requests, approves/rejects expert documents, manages community content |
| **Project Member** | Core users -- create/manage projects, collaborate with team members, hire domain experts, use Kanban boards, take notes, schedule events |
| **Mentor (Domain Expert)** | Subject-matter experts -- complete verification profiles, create service listings, accept/reject bookings, conduct video sessions, manage finances and withdrawals |
Each role has a dedicated dashboard layout and sidebar navigation in the frontend.
---
## Key Features
### 1. Domain Expert Marketplace
- Experts register, complete a multi-step profile (bio, expertise areas, education, verification documents, profile photo)
- **Moderator verification pipeline**: documents are reviewed and approved/rejected by moderators
- Experts create **service listings** with descriptions, pricing tiers, session types, and thumbnails
- Project members browse and search experts, view public profiles, and book services
### 2. Project Management & Kanban Boards
- Full CRUD for projects with status tracking (Active, Completed, Archived, etc.), priority levels, privacy settings, and due dates
- Built-in **Kanban board** per project with customizable columns and drag-and-drop task management
- Tasks support titles, descriptions, due dates, priority levels, and **assignee management**
- Collaborator invitations with approval workflow (notifications sent, accept/reject flow)
- File uploads attached to projects (stored via Supabase)
### 3. Real-Time Chat (Private & Group)
- **Private messaging** between any two users via WebSocket (STOMP protocol)
- **Group chat** tied to projects -- automatically created when a project team forms
- Message persistence in PostgreSQL with chat history and summaries
- User search for starting new conversations
- Group management: add/remove members, view all participants
### 4. Community Forum
- Users create posts with rich content and **tags** for categorization
- Full comment system on posts
- **Like/unlike** system with optimized batch queries (avoids N+1 problems)
- Filter posts by tag, view own posts, edit/delete authored posts
- Markdown rendering support on the frontend
### 5. Video Meetings (Jitsi Integration)
- Create video meeting rooms with unique room names
- Participant management (join/leave tracking with capacity limits)
- Meeting lifecycle: create, join, end (creator-only)
- View active/past meetings per user
### 6. Payment System (PayHere Gateway)
- Integrated with **PayHere** (Sri Lankan payment gateway) supporting sandbox and live modes
- Full payment flow: create session, redirect to gateway, handle callbacks, track status
- Payment history with pagination
- Cancel pending payments
- **Wallet & transaction system**: users have wallets, transactions are recorded between sender/receiver
- Detailed transaction history with service listing context
- Admin transaction oversight dashboard
### 7. Calendar & Events
- Personal and project-level event management
- Create, update, delete events with date/time
- Query events by specific date or date range
- Event count analytics
### 8. Notes System
- Personal note-taking for project members
- Full CRUD operations tied to authenticated users
- Notes rendered with Markdown support on the frontend
### 9. Admin Dashboard
- **Analytics overview**: total users, projects, trends
- **User management**: paginated user lists with filtering by role/status, search, create/delete users via Supabase
- **User trend charts** (last 12 months) powered by Recharts on the frontend
- **Project moderation**: view all projects, update status, delete projects
- **Transaction monitoring**: view all platform transactions with detailed breakdowns
### 10. Inquiry & Support System
- Users submit inquiries (categorized by type)
- Moderators/admins filter, search, and respond to inquiries
- Status tracking (open, resolved, etc.)
- Overview dashboard with inquiry metrics
### 11. Notifications
- In-app notification system with real-time delivery
- Mark as read functionality
- Project collaboration approval notifications
- Bell icon badge in the navbar
### 12. Review System
- Members can leave reviews for mentors after sessions
- Full CRUD for reviews with rating support
---
## Database Design Highlights
The PostgreSQL schema includes 30+ entities with rich relationships:
- **User** is the central entity, linked to projects, posts, comments, messages, notifications, events, payments, bookings, reviews, wallets, and social links
- **Project** connects to KanbanBoard, KanbanColumn, Task, UserProject (many-to-many), and ProjectFiles
- **DomainExperts** subsystem includes: DomainExperts profile, ExpertiseArea, Education, VerificationDocument, ServiceListing, ServiceListingPricing, ServiceBooking
- **Chat** subsystem: Message (private + group), Group
- **Financial** entities: Wallet, SystemWallet, Transaction, PaymentSession, PayHereCallback
---
## Security
- **Stateless JWT authentication** -- tokens issued by Supabase Auth, validated by a custom `JwtAuthenticationFilter` on every request
- **WebSocket security** -- `AuthChannelInterceptor` validates JWT tokens on STOMP connections
- **Role-based endpoint protection** via Spring Security's `authorizeHttpRequests` and method-level `@EnableMethodSecurity`
- **CORS configuration** for frontend-backend communication
- **Input validation** using Jakarta Bean Validation (`@Valid`)
- Swagger UI and health endpoints are publicly accessible; all other endpoints require authentication
---
## Frontend Highlights
- **Parallax hero section** with animated particle effects on the landing page
- **Responsive design** with Tailwind CSS, mobile-friendly layouts
- **Role-based routing** -- dedicated layouts and sidebars for Admin, Moderator, Project Member, and Domain Expert dashboards
- **Toast notifications** via react-hot-toast and Sonner
- **SweetAlert2** for confirmation dialogs
- **Recharts** for admin analytics visualizations
- **Image compression** (browser-image-compression) before upload
- **Markdown rendering** for community posts and notes
---
## API Design
- RESTful API with versioned endpoints (`/api/v1/...`)
- Consistent response patterns with DTOs and message wrappers
- Paginated endpoints using Spring Data's `Pageable`
- OpenAPI/Swagger documentation auto-generated via SpringDoc
- WebSocket endpoints at `/ws` with STOMP message mapping (`/app/private-message`, `/app/group-message`)
---
## What Makes BrainMap Unique
1. **End-to-end project mentorship lifecycle** -- from finding an expert to managing the project to paying for services, all in one platform
2. **Verification pipeline for trust** -- moderators validate expert credentials before they can offer services
3. **Built-in collaboration suite** -- no need for external tools (Trello, Slack, Zoom, etc.)
4. **Role-based experience** -- each user type gets a tailored dashboard and feature set
5. **Real-time communication** -- WebSocket-powered chat and notifications for instant collaboration
6. **Integrated financial system** -- payment gateway + wallet + transaction history provides a complete marketplace experience
---
## Repository Structure
| Repository | Language | Purpose |
|---|---|---|
| [brainMap-Backend](https://github.com/brain-Map/brainMap-Backend) | Java | Spring Boot REST API, WebSocket server, business logic, database layer |
| [brainMap-Frontend](https://github.com/brain-Map/brainMap-Frontend) | TypeScript | Next.js web application, UI components, client-side routing |
---
*BrainMap demonstrates full-stack engineering across a modern Java + React stack, with real-world features including authentication, authorization, real-time communication, payment integration, file management, and a multi-role user experience.*
