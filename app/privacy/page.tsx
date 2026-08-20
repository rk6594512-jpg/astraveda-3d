export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-20 pb-12">
      <div className="section-padding max-w-3xl mx-auto">
        <h1 className="heading-section mb-6">Privacy Policy</h1>
        <div className="space-y-6 text-lavender/70 leading-relaxed">
          <p>At AstraVeda 3D, we take your privacy seriously. This policy explains how we collect, use, and protect your personal information.</p>

          <h2 className="font-serif text-xl text-moon-white mt-8 mb-3">Data We Collect</h2>
          <p>We collect your name, email, birth details (date, time, place), and palm images (if you choose to use the palm scan feature). All data is encrypted using AES-256.</p>

          <h2 className="font-serif text-xl text-moon-white mt-8 mb-3">How We Use Your Data</h2>
          <p>Your birth details are used solely for astrological calculations. Palm images are processed for analysis and then automatically deleted. We never sell or share your data with third parties.</p>

          <h2 className="font-serif text-xl text-moon-white mt-8 mb-3">Your Rights</h2>
          <p>You can request deletion of your account and all associated data at any time from your Profile settings. We honor all data deletion requests within 30 days.</p>

          <h2 className="font-serif text-xl text-moon-white mt-8 mb-3">Contact</h2>
          <p>For privacy concerns, contact us at privacy@astraveda3d.com</p>
        </div>
      </div>
    </main>
  )
}
