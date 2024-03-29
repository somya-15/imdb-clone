This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

[http://localhost:3000/api/hello](http://localhost:3000/api/hello) is an endpoint that uses [Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers). This endpoint can be edited in `app/api/hello/route.js`.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Project Documentation

Que1. ".js" vs ".jsx" file

Sol. JS is simply a scripting language adding functionality into your website. JSX is an addition to the JavaScript syntax which is a mixture of both HTML and JavaScript. Both JS and JSX are interchangeable but JSX makes the code easier to understand for users.

Que2. Does it matter if you use JS or JSX?

Sol. .jsx is more than .js, it is javascript + xml, which allows you to write html inside a .js file without using template strings. For this reason it's a good practice to use .jsx for your react files, instead of .js (which is also valid).

Que3. How to convert JSX file to JS?

Sol. https://www.freecodecamp.org/news/jsx-in-react-introduction/

You can use create-react-app which internally uses Babel for the JSX to JavaScript conversion.

We can use the above JSX in our React code like this:

```
class JSXDemo extends React.Component {
    render() {
        return <h1>This is JSX</h1>;
    }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));
```

Here, we're returning the JSX from the JSXDemo component and rendering that on the screen using the ReactDOM.render method.

## Errors

1.

```
Unhandled Runtime Error
Error: Hydration failed because the initial UI does not match what was rendered on the server.

Warning: Expected server HTML to contain a matching <div> in <html>.

See more info here: https://nextjs.org/docs/messages/react-hydration-error

Component Stack
div
html
Call Stack
React
throwOnHydrationMismatch
```

Solution:

This error message typically occurs in Next.js when the client-side rendered (CSR) components don't match the server-rendered (SSR) components. In Next.js, the server renders the HTML code for the initial page request and sends it to the client for display. Once the client receives the HTML code, it hydrates it by attaching JavaScript event listeners and turning the static HTML into a dynamic React component.

This error message appears when there is a mismatch between the initial HTML code sent by the server and the HTML code generated by the client-side JavaScript. The most common causes of this error are:

    a. The server sends different HTML code than the client-side JavaScript.

    b. The client-side JavaScript manipulates the HTML code generated by the server.

    c. There is a race condition between the server and client-side rendering.

To fix this error, you need to ensure that the server and client-side JavaScript render the same HTML code. Some common solutions are:

    a. Ensure that your server-side rendering and client-side rendering components are the same.

    b. Avoid manipulating the DOM or making API calls during client-side rendering.

    c. Use the useEffect hook in React to prevent race conditions between server-side and client-side rendering.

    d. Use the next/dynamic component to dynamically load components that are not used during server-side rendering.
