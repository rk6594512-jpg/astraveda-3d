import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { message, chartContext, language = "en" } = body

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      )
    }

    // Mock AI response
    // In production, this will call Gemini/OpenAI with chart context
    const responses: Record<string, string> = {
      career: `Based on your chart's 10th house lord Jupiter positioned in Libra, your career path favors roles involving guidance and advisory positions.

**Chart-based reasoning:** Jupiter's placement suggests expansion through partnerships.

**Positive possibilities:** Growth in consulting, education, or legal fields.

**Potential challenges:** Initial delays due to Saturn's influence.

**Practical suggestions:** Focus on building credentials and networking with mentors.

**Limitation:** This is a chart-based perspective, not a guaranteed outcome.`,
    }

    const response = responses[message.toLowerCase().includes("career") ? "career" : "general"] ||
      `I understand your question about "${message}". As your AI Jyotishi, I would analyze this through your birth chart's specific planetary positions.

**Direct answer:** This area of your life is influenced by multiple chart factors.

**Chart-based reasoning:** Without your complete chart loaded, I can share general guidance.

**Positive possibilities:** Vedic astrology traditionally views all chart placements as offering growth paths.

**Practical suggestions:** Regular self-reflection and meditation can provide deeper clarity.

**Limitation:** For specific predictions, I need your complete birth details.`

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      response,
      agentUsed: "kundli",
      chartContext: !!chartContext,
      language,
    })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
