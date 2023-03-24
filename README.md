# team-helix

Hackathon repo for team Helix

## L2 Staking Frontend

This is the frontend repo for the L2 staking app, which allows you to stake ethereum directly from an L2 (in this case, Optimism).

## Getting Started

Compile and run locally using

```bash
yarn start
```

This will open the development server on ttp://localhost:3000 and you can see your changes live in the browser.

## thirdweb

This project uses thirdweb, which is a collection of React hooks and UI components for quickly bootstrapping web3 dApps. 

You can start editing the page by modifying `src/index.tsx`. The page auto-updates as you edit the file.

On `src/index.tsx`, you'll find the `ThirdwebProvider` wrapping the app; this is necessary for thirdweb's hooks to work.

On `src/index.js`, you'll find the `ThirdwebProvider` wrapping the app, this is necessary for the [hooks](https://portal.thirdweb.com/react) and
[UI Components](https://portal.thirdweb.com/ui-components) to work.

### Deploy to IPFS

Deploy a copy of the application to IPFS using the following command:

```bash
yarn deploy
```

## Learn More

To learn more about thirdweb, React and CRA, take a look at the following resources:

- [thirdweb React Documentation](https://docs.thirdweb.com/react) - learn about the thirdweb React SDK.
- [thirdweb TypeScript Documentation](https://docs.thirdweb.com/react) - learn about the thirdweb JavaScript/TypeScript SDK.
- [thirdweb Portal](https://docs.thirdweb.com/react) - thirdweb guides and development resources.
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started) - learn about CRA features.
- [React documentation](https://reactjs.org/) - learn React.
