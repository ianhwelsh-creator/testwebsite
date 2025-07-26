<script>
  // Set initial cookie (better formatting)
  document.cookie = "orderId=0; path=/";
  document.cookie = "counter=0; path=/";

  const jsonRequestURL = "https://5d76bf96515d1a0014085cf9.mockapi.io/order";

  // Step 1: Fetch existing orders
  fetch(jsonRequestURL)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then(data => {
      console.log("Current Orders:", data);

      // Step 2: Create a new order object
      const newOrder = {
        id: data.length + 1,
        amount: 200,
        product: ["userOrder"]
      };

      // Step 3: Send new order with POST request
      return fetch(jsonRequestURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newOrder)
      });
    })
    .then(postResponse => {
      if (!postResponse.ok) throw new Error("Failed to POST new order");
      return postResponse.json();
    })
    .then(postedData => {
      console.log("New Order Posted Successfully:", postedData);
    })
    .catch(error => {
      console.error("Error:", error);
    });
</script>
