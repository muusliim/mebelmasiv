"use client";

import { YMaps, Map as YMap, Placemark } from "react-yandex-maps-no-default-props";

const Map = () => {
	return (
		<YMaps>
			<YMap
				defaultState={{
					center: [59.875456, 30.314637],
					type: "yandex#map",
					zoom: 17,
					controls: ["zoomControl", "fullscreenControl"],
				}}
				modules={["control.ZoomControl", "control.FullscreenControl"]}
				className="w-full lg:h-[350px] h-[240px] rounded-lg"
			>
				<Placemark
					modules={["geoObject.addon.balloon"]}
					geometry={[59.875456, 30.314637]}
					properties={{
						balloonContentBody: "Мебель-массив",
					}}
					options={{
						preset: "islands#brownDotIcon",
					}}
				/>
			</YMap>
		</YMaps>
	);
};
Map.displayName = "Map";

export default Map;
