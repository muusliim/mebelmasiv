"use client";

import { memo } from "react";
import { YMaps, Map as YMap, Placemark } from "@pbe/react-yandex-maps";

type MapProps = {
	latitude: number;
	longitude: number;
};

const Map: React.FC<MapProps> = memo(({ latitude, longitude }) => {
	return (
		<YMaps preload={true}>
			<YMap
				defaultState={{
					center: [latitude, longitude],
					type: "yandex#map",
					zoom: 17,
					controls: ["zoomControl", "fullscreenControl"],
				}}
				modules={["control.ZoomControl", "control.FullscreenControl"]}
				className="w-full lg:h-[350px] h-[240px] rounded-lg"
			>
				<Placemark
					modules={["geoObject.addon.balloon"]}
					defaultGeometry={[latitude, longitude]}
					properties={{
						balloonContentBody: "Мебель-массив",
					}}
					defaultOptions={{
						preset: "islands#brownDotIcon",
					}}
				/>
			</YMap>
		</YMaps>
	);
});
Map.displayName = "Map";

export default Map;
