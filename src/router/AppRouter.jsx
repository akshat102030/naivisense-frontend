import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthLayout } from '../layouts/AuthLayout.jsx'
import { AdminLayout } from '../layouts/AdminLayout.jsx'
import { ParentLayout } from '../layouts/ParentLayout.jsx'
import { StudentLayout } from '../layouts/StudentLayout.jsx'
import { TherapistLayout } from '../layouts/TherapistLayout.jsx'
import { LoginPage } from '../pages/auth/LoginPage.jsx'
import { SignupPage } from '../pages/auth/SignupPage.jsx'
import { StudentOverviewPage } from '../pages/student/StudentOverviewPage.jsx'
import { TherapySessionPage } from '../pages/student/TherapySessionPage.jsx'
import { StudentProgressPage } from '../pages/student/StudentProgressPage.jsx'
import { StudentAssistantPage } from '../pages/student/StudentAssistantPage.jsx'
import { StudentHelpPage } from '../pages/student/StudentHelpPage.jsx'
import { ParentOverviewPage } from '../pages/parent/ParentOverviewPage.jsx'
import { ParentProgressPage } from '../pages/parent/ParentProgressPage.jsx'
import { BehaviorLogsPage as ParentBehaviorLogsPage } from '../pages/parent/BehaviorLogsPage.jsx'
import { TherapyPlanPage } from '../pages/parent/TherapyPlanPage.jsx'
import { AIAssistantPage } from '../pages/parent/AIAssistantPage.jsx'
import { AlertsPage } from '../pages/parent/AlertsPage.jsx'
import { TherapistOverviewPage } from '../pages/therapist/TherapistOverviewPage.jsx'
import { ProgressAnalysisPage } from '../pages/therapist/ProgressAnalysisPage.jsx'
import { TherapyPlansPage } from '../pages/therapist/TherapyPlansPage.jsx'
import { BehaviorLogsPage as TherapistBehaviorLogsPage } from '../pages/therapist/BehaviorLogsPage.jsx'
import { AnomalyAlertsPage } from '../pages/therapist/AnomalyAlertsPage.jsx'
import { DocumentUploadPage } from '../pages/therapist/DocumentUploadPage.jsx'
import { AIInsightsPage } from '../pages/therapist/AIInsightsPage.jsx'
import { SessionsPage } from '../pages/therapist/SessionsPage.jsx'
import { AdminOverviewPage } from '../pages/admin/AdminOverviewPage.jsx'
import { AllChildrenPage } from '../pages/admin/AllChildrenPage.jsx'
import { TherapistStaffPage } from '../pages/admin/TherapistStaffPage.jsx'
import { AnalyticsPage } from '../pages/admin/AnalyticsPage.jsx'
import { FeedbackVerificationPage } from '../pages/admin/FeedbackVerificationPage.jsx'
import { AnomalyReviewPage } from '../pages/admin/AnomalyReviewPage.jsx'
import { ReportsPage } from '../pages/admin/ReportsPage.jsx'
import { ModelHealthPage } from '../pages/admin/ModelHealthPage.jsx'
import { ProtectedRoute } from './ProtectedRoute.jsx'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Route>

      <Route element={<ProtectedRoute allowRole="student" />}>
        <Route element={<StudentLayout />}>
          <Route path="/student/overview" element={<StudentOverviewPage />} />
          <Route path="/student/session" element={<TherapySessionPage />} />
          <Route path="/student/progress" element={<StudentProgressPage />} />
          <Route path="/student/assistant" element={<StudentAssistantPage />} />
          <Route path="/student/help" element={<StudentHelpPage />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute allowRole="parent" />}>
        <Route element={<ParentLayout />}>
          <Route path="/parent/overview" element={<ParentOverviewPage />} />
          <Route path="/parent/progress" element={<ParentProgressPage />} />
          <Route path="/parent/behavior-logs" element={<ParentBehaviorLogsPage />} />
          <Route path="/parent/therapy-plan" element={<TherapyPlanPage />} />
          <Route path="/parent/ai-assistant" element={<AIAssistantPage />} />
          <Route path="/parent/alerts" element={<AlertsPage />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute allowRole="therapist" />}>
        <Route element={<TherapistLayout />}>
          <Route path="/therapist/overview" element={<TherapistOverviewPage />} />
          <Route path="/therapist/progress" element={<ProgressAnalysisPage />} />
          <Route path="/therapist/therapy-plans" element={<TherapyPlansPage />} />
          <Route path="/therapist/behavior-logs" element={<TherapistBehaviorLogsPage />} />
          <Route path="/therapist/anomalies" element={<AnomalyAlertsPage />} />
          <Route path="/therapist/documents" element={<DocumentUploadPage />} />
          <Route path="/therapist/ai-insights" element={<AIInsightsPage />} />
          <Route path="/therapist/sessions" element={<SessionsPage />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute allowRole="admin" />}>
        <Route element={<AdminLayout />}>
          <Route path="/admin/overview" element={<AdminOverviewPage />} />
          <Route path="/admin/children" element={<AllChildrenPage />} />
          <Route path="/admin/therapists" element={<TherapistStaffPage />} />
          <Route path="/admin/analytics" element={<AnalyticsPage />} />
          <Route path="/admin/feedback" element={<FeedbackVerificationPage />} />
          <Route path="/admin/anomalies" element={<AnomalyReviewPage />} />
          <Route path="/admin/reports" element={<ReportsPage />} />
          <Route path="/admin/model-health" element={<ModelHealthPage />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

