export const budgetSummary = async (data:any) => {
  // console.log(data.tickets.length);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      sessionId: data.sessionId,
      name: data.name,
      email: data.email,
      artist: data.artist,
      location: data.location,
      venue: data.venue,
      capacity: Number(data.capacity),
      date: data.date,
      currency: data.currency,
      tickets: data.tickets,
      expenses: data.expenses,
    }),
  };

  try {
    if (!process.env.NEXT_BUDGET_URL) {
      throw new Error("NEXT_BUDGET_URL environment variable is not defined");
    }
    const response = await fetch(
      process.env.NEXT_BUDGET_URL as string,
      requestOptions
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.response.error || "Something went wrong");
    }
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};
