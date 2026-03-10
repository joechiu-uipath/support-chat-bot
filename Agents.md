# Yens next gen Support Portal (prototype)
This is a new customer support portal prototype for Yens (https://www.yens.com.tw/). We will make a new standalone web app with the following components:

# Tecnical design
- Backend - node, hono, typescript, using SQLite as database
- Frontend - typescript, React, vite
- Build system - pnpm with workspaces so I can build and run both with a single pnpm build and pnpm dev. 
- The chat bot should use a modern agent SDK - let's use Vercel AI SDK
- backend use .env and dotenv to store secret like LLM keys, create keys entries Vercel AI SDK like provider name, model id, API keys, etc. Whatever necessary for the AI SDK to function.
- The chat bot needs some native tools for its functionality

# Mock data
The backend should store some data in SQLite with full text search support. 
Create mock data in SQL script for these elements - we can ask for revision of the data in the future.
- Detail product database (crawl the existing company site for this info, including rich images)
- Create a mock inventory table for all products
- Create a mock customer table with 50 distinct mock customers with a lot of variety in location, demographic, etc.
- Create a mock order table with 150 completed and 50 active orders with variety of combination of products, quantity and fulfillment mode and status. 

# Product design
- Design - the new portal should have a visual design that is modern and very energentic but with some familiar visual languge like logo from the Yens existing site (please research). 
- The key feature of this new site is a LLM-powered support chat bot. The site would be in a 2 pane layout, the left pane about 70% is a traditional informational site about the products and services and the right hand side is a chat pane where customer can chat with the LLM-powered chat bot. The novel feature of this site is that we will reformat / redesign the content of the site based on conversation with the customer - based on their preference and suggestions. The chat bot would also have tranditional support features like checking inventory, order (simulated for the prototype), checking status, and other suppport functions.

# Customer Persona
- Create 5 persona for customers and ensure there is a good distribution of each persona in the mock customer data. Come up with different product recommendation and marketing messages for each of the persona. For each new customer, use chat history data and product order pattern to estimate best possible fit for persona and re-arrange the marketing message based on that.

# Key outcome
- Let's make sure that the site highlight a set of key products in a very compelling gallery and sales pitch
- Functional chat interface with streaming output and the agent can carry multi-turn conversation aim to informa, upsell and support customer on basic support tasks.