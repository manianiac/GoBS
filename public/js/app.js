/**
 * The Guild of the Black Sky // Client-Side Application Core
 * Confluence Sovereign Defense & Municipal Portal
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initRedactionClickers();
  initContactForm();
});

/**
 * Mobile Navigation Toggle
 */
function initMobileNav() {
  const btn = document.querySelector('.mobile-menu-btn');
  const links = document.querySelector('.nav-links');
  if (btn && links) {
    btn.addEventListener('click', () => {
      links.classList.toggle('open');
      const isOpen = links.classList.contains('open');
      btn.setAttribute('aria-expanded', isOpen);
    });
  }
}

/**
 * Interactive Confidential Redaction Clickers
 */
function initRedactionClickers() {
  document.querySelectorAll('.redacted').forEach(el => {
    el.setAttribute('title', 'Security Clearance: Click to decrypt confidential dossier');
    el.addEventListener('click', () => {
      el.classList.toggle('revealed');
    });
  });
}

/**
 * Sacred Desk Contact Form Dispatch
 */
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  const successBox = document.getElementById('contactSuccessBox');
  const trackingSpan = document.getElementById('contactTrackingSpan');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Routing to Woodford...';
      }

      const payload = {
        form_type: 'CONTACT-DISPATCH',
        applicant_name: document.getElementById('contactName')?.value || 'Envoy',
        estate_reference: document.getElementById('contactEmail')?.value || 'Independent House',
        assignment_preference: document.getElementById('contactCategory')?.value || 'General Inquiry',
        notes: document.getElementById('contactDetails')?.value || ''
      };

      try {
        const res = await fetch('/api/submit-form', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        const data = await res.json();

        contactForm.style.display = 'none';
        if (successBox) {
          successBox.style.display = 'block';
          if (trackingSpan) trackingSpan.textContent = data.tracking_id;
        }
      } catch (err) {
        const mockTracking = `CONF-DISPATCH-${Math.floor(10000 + Math.random() * 90000)}`;
        contactForm.style.display = 'none';
        if (successBox) {
          successBox.style.display = 'block';
          if (trackingSpan) trackingSpan.textContent = mockTracking;
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Transmit Docket to Sacred Desk';
        }
      }
    });
  }
}
