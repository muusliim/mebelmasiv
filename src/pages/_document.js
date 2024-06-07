import Document, { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => (
	<Document>
		<Html lang="ru">
			<Head>
				<meta name="yandex-verification" content="5d8facde203b0ee2" />
				<meta name="yandex-site-verification" content="5d8facde203b0ee2" />
				<meta name="robots" content="index, follow" />
				<meta name="googlebot" content="index, follow" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	</Document>
);

export default MyDocument;
