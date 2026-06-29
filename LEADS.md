# Lead capture — how it works

All forms on this site (the **/free-audit** landing page and **/contact**) capture:

- Name
- Phone / WhatsApp
- Email
- FB/IG page or website link
- Requested service (Free Meta Ads Audit, Free 4 Ad Creatives, etc.)
- Optional message
- A `Source` tag so you know which page the lead came from

## Where leads go

Submissions are delivered by email via [FormSubmit.co](https://formsubmit.co) (no backend, no server) to:

```
sales@nexovadigital.com
```

Configured in `src/components/LeadForm.tsx` → `LEAD_INBOX`.

## ⚠️ One-time activation (required before leads arrive)

FormSubmit needs the destination inbox activated **once**:

1. Submit the form on the live site one time (any test data).
2. An activation email lands in **sales@nexovadigital.com** from FormSubmit.
3. Click the activation link in that email.
4. Done — every future submission is delivered automatically.

Until step 3 is completed, the form will show "success" to the visitor but the
email won't be delivered.

## Optional: hide the email / add spam protection

FormSubmit can give you a random alias (e.g. `formsubmit.co/ajax/abc123`) so the
raw email isn't in the page source. After activation, grab your alias from the
FormSubmit dashboard and replace `ENDPOINT` in `LeadForm.tsx`.
