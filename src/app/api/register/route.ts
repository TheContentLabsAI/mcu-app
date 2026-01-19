import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;
    
    console.log("Receiving submission...");
    console.log("Targeting Webhook URL:", webhookUrl);
    console.log("Payload:", JSON.stringify(body, null, 2));

    if (!webhookUrl) {
      console.error("Error: Webhook URL is missing from environment variables.");
      return NextResponse.json(
        { error: "Webhook URL not configured" },
        { status: 500 }
      );
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error(`Webhook Failed! Status: ${response.status}, Body: ${errorText}`);
        throw new Error(`Webhook responded with status: ${response.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Proxy Error:", error);
    
    // safe error message extraction
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    const errorStack = error instanceof Error ? error.stack : "";

    return NextResponse.json(
      { 
        error: "Submission Failed", 
        details: errorMessage,
        debug_env_n8n: !!process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL // Return true/false if env var exists (don't expose value)
      },
      { status: 500 }
    );
  }
}
