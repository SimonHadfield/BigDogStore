import type { APIRoute } from 'astro';

export const prerender = false;

// Simple in-memory mock store for local development/testing.
// Ready for Cloudflare D1 integration:
// const { results } = await env.DB.prepare('INSERT INTO waitlist (email, created_at) VALUES (?, ?)').bind(email, Date.now()).run();
const waitlistSubscribers: Array<{ email: string; timestamp: string }> = [];

export const POST: APIRoute = async ({ request }) => {
  try {
    const contentType = request.headers.get('content-type') || '';
    let email = '';

    if (contentType.includes('application/json')) {
      const data = await request.json();
      email = data?.email || '';
    } else {
      const formData = await request.formData();
      email = (formData.get('email') as string) || '';
    }

    email = email.trim().toLowerCase();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          error: 'Please enter a valid email address so we know where to bark!',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Record subscriber
    const record = {
      email,
      timestamp: new Date().toISOString(),
    };
    waitlistSubscribers.push(record);

    console.log(`[Waitlist API] New Clumsy Giants subscriber: ${email}`);
    // Ready for webhook integration (e.g. Klaviyo, Mailchimp, ConvertKit, Discord bot)

    return new Response(
      JSON.stringify({
        success: true,
        message: "You're in the pack! We'll bark when Drop 01 goes live. 🐾",
        email,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    console.error('[Waitlist API Error]:', error);
    return new Response(
      JSON.stringify({
        error: 'Oops! Our clumsy paws tripped on a wire. Please try again.',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
