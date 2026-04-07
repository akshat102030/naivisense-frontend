# Sangillence Implementation Spec (File-by-File)

This document maps IA, routes, and components to the current `naivisense-frontend` codebase so implementation can proceed immediately.

---

## 1) Information Architecture (IA)

### Primary Navigation (max 2 levels)
- `Dashboard`
- `Sessions`
- `Progress`
- `Messages / AI Assistant`
- `Support`

### Role Views
- **Student (Primary):** daily therapy, session wizard, mood, AI support
- **Therapist:** patient cards, analysis, recommendations, session history
- **Parent:** plain-language progress, alerts, therapist communication
- **Admin:** operations, quality, analytics, model/system health

---

## 2) Route-to-Screen Ownership

Use existing router file: `src/router/AppRouter.jsx`

### Parent Routes
- `/parent/overview` -> `src/pages/parent/ParentOverviewPage.jsx`
- `/parent/progress` -> `src/pages/parent/ParentProgressPage.jsx`
- `/parent/behavior-logs` -> `src/pages/parent/BehaviorLogsPage.jsx`
- `/parent/therapy-plan` -> `src/pages/parent/TherapyPlanPage.jsx`
- `/parent/ai-assistant` -> `src/pages/parent/AIAssistantPage.jsx`
- `/parent/alerts` -> `src/pages/parent/AlertsPage.jsx`

### Therapist Routes
- `/therapist/overview` -> `src/pages/therapist/TherapistOverviewPage.jsx`
- `/therapist/progress` -> `src/pages/therapist/ProgressAnalysisPage.jsx`
- `/therapist/therapy-plans` -> `src/pages/therapist/TherapyPlansPage.jsx`
- `/therapist/behavior-logs` -> `src/pages/therapist/BehaviorLogsPage.jsx`
- `/therapist/anomalies` -> `src/pages/therapist/AnomalyAlertsPage.jsx`
- `/therapist/documents` -> `src/pages/therapist/DocumentUploadPage.jsx`
- `/therapist/ai-insights` -> `src/pages/therapist/AIInsightsPage.jsx`
- `/therapist/sessions` -> `src/pages/therapist/SessionsPage.jsx`

### Admin Routes
- `/admin/overview` -> `src/pages/admin/AdminOverviewPage.jsx`
- `/admin/children` -> `src/pages/admin/AllChildrenPage.jsx`
- `/admin/therapists` -> `src/pages/admin/TherapistStaffPage.jsx`
- `/admin/analytics` -> `src/pages/admin/AnalyticsPage.jsx`
- `/admin/feedback` -> `src/pages/admin/FeedbackVerificationPage.jsx`
- `/admin/anomalies` -> `src/pages/admin/AnomalyReviewPage.jsx`
- `/admin/reports` -> `src/pages/admin/ReportsPage.jsx`
- `/admin/model-health` -> `src/pages/admin/ModelHealthPage.jsx`

---

## 3) Component Map Aligned to Current Folders

## `src/components/common`
- `Sidebar.jsx`: role navigation + badges + child chip
- `Topbar.jsx`: role title/actions + logout + status cues
- `Panel.jsx`: standard card container with header/action
- `StatCard.jsx`: KPI summary cards
- `Badge.jsx`: semantic chips
- `Button.jsx`: primary/ghost/outline/gold states
- `Avatar.jsx`: role-based avatar style
- `ProgressBar.jsx`: linear progress with label/value
- `AlertBanner.jsx`: inline feedback/info/warn/critical
- `LoadingSpinner.jsx`: async state placeholder

## `src/components/charts`
- `ProgressLineChart.jsx`: trends (student/therapist/admin)
- `SessionBarChart.jsx`: stacked session distribution
- `DomainProgressBars.jsx`: communication/motor/social/compliance
- `GaugeChart.jsx`: overall progress arc

## `src/components/parent`
- `BehaviorLogList.jsx`, `BehaviorLogItem.jsx`
- `TherapyPlanCard.jsx`, `UpcomingSession.jsx`
- `AIChat.jsx`, `ChatMessage.jsx`
- `FeedbackForm.jsx`, `AnomalyAlert.jsx`

## `src/components/therapist`
- `ChildSwitcher.jsx`, `ChildHeaderBar.jsx`
- `BehaviorHeatmap.jsx`
- `TherapyPlanEditor.jsx`, `PlanItem.jsx`
- `SessionNotes.jsx`
- `DocumentUpload.jsx`, `DocItem.jsx`
- `AnomalyAlerts.jsx`
- `ClinicalFeedback.jsx`
- `MiniStats.jsx`

## `src/components/admin`
- `KPIRibbon.jsx`, `KPICard.jsx`
- `TherapistTable.jsx`, `TherapistRow.jsx`
- `FeedbackVerifyQueue.jsx`, `VerifyItem.jsx`
- `AnomalyQueue.jsx`, `AnomalyQueueItem.jsx`
- `AIModelHealth.jsx`
- `ChildrenTable.jsx`, `ChildrenRow.jsx`
- `ActivityFeed.jsx`
- `CenterInfoChip.jsx`

---

## 4) Data Contracts (Current + Next)

Use `src/data/*.js` and `src/hooks/useMockData.js` now. Keep schema stable for backend switch.

### Child
- `id`, `name`, `age`, `condition`, `severity`
- `progress.overall|communication|motor|social|compliance`
- `hasAlert`, `alertMessage`, `sessionCount`, `aiConfidence`

### Behavior Log
- `id`, `childId`, `type`, `severity`, `description`, `recordedAt`, `recordedBy`

### Session
- `id`, `childId`, `type`, `therapistName`, `startsAt`, `badge`

### Feedback Queue
- `id`, `childId`, `childName`, `sessionDate`, `therapistScore`, `parentScore`, `gap`, `status`

### Anomaly
- `id`, `childId`, `childName`, `type`, `severity`, `title`, `description`, `detectedAt`, `status`

---

## 5) Accessibility Implementation Checklist (By File)

### All pages in `src/pages/**`
- Use semantic headings (`h1`/`h2`) in each screen.
- Ensure focus order matches visual order.
- No color-only status communication (icon/text + color).
- Keep primary actions large (`>=44px` touch targets).
- Add empty/error states for lists and tables.

### Chat Components (`AIChat.jsx`, `ChatMessage.jsx`)
- `aria-live="polite"` message region.
- Keyboard send (`Enter`), multiline fallback (`Shift+Enter` optional).
- Voice mode entry point (future Web Speech hook).

### Wizard/Session Pages (`SessionsPage.jsx`, future `SessionWizardPage.jsx`)
- Step progress with text (“Step X of Y”).
- Confirm on exit and provide resume state.
- Undo/retry affordances for recoverability.

### Alerts/Errors (`AlertBanner.jsx`, anomalies/review pages)
- Severity text labels: `Info`, `Warning`, `Critical`.
- Persistent actionable controls (`Review`, `Dismiss`, `Resolve`).

---

## 6) UI Behavior Standards

- **Feedback latency:** visual response within 100-300ms.
- **Undo for risky actions:** verification reject, anomaly dismiss, delete document.
- **Two-click rule:** common tasks reachable in <=2 actions.
- **Cognitive load:** no dense dashboard section > 7 immediate items before “View more”.

---

## 7) Frontend Tech Plan (Current Stack Compatible)

Current stack already aligned:
- React + Vite + React Router
- Tailwind + CSS tokens
- Recharts
- Context for auth/child

Recommended next additions:
- `react-aria` (accessible primitives)
- `react-hook-form` + `zod` (form validation + error messaging)
- `jest-axe` (a11y CI checks)
- `framer-motion` (minimal, controlled micro-interactions)

---

## 8) File-by-File Immediate Tasks (Execution Backlog)

### Priority 1: Student-first experience
1. Add dedicated student shell/pages (currently parent view can be adapted quickly).
2. Build `Session Wizard` screen:
   - New file: `src/pages/student/TherapySessionPage.jsx`
   - New components: `src/components/student/StepWizard.jsx`, `InstructionCard.jsx`, `VoiceDock.jsx`
3. Add mood input as reusable:
   - `src/components/common/MoodSelector.jsx`

### Priority 2: Accessibility hardening
1. Add ARIA and keyboard audit pass on all interactive controls.
2. Add focus trapping for dialogs/modals.
3. Add text scaling and contrast toggles in `Topbar.jsx`.

### Priority 3: Adaptive support
1. Add contextual hint system:
   - `src/components/common/ContextHint.jsx`
   - `src/context/HelpContext.jsx`
2. Add event instrumentation hooks:
   - `src/hooks/useUiMetrics.js` for clicks/time/errors/help usage.

### Priority 4: API readiness
1. Keep page logic in hooks:
   - `useParentDashboardData`, `useTherapistDashboardData`, `useAdminDashboardData`
2. Replace `useMockData` internals with API calls (no page-level rewrite needed).

---

## 9) Testing Plan (Usability + Accessibility)

- Add keyboard navigation tests for each major route.
- Add screen reader smoke tests on:
  - login/signup
  - parent overview
  - therapist overview
  - admin feedback queue
- Track:
  - task completion time
  - error count
  - undo usage
  - help invocation rate

---

## 10) Definition of Done (Per Screen)

A screen is complete only if:
1. It renders with role-consistent layout/components.
2. Keyboard-only flow works.
3. Labels and status are screen-reader friendly.
4. Error/empty/loading states exist.
5. User action yields immediate visible feedback.
6. Build and lint pass.

