import { ComposableMap, Geographies, Geography } from "react-simple-maps";
//https://www.react-simple-maps.io/docs/getting-started/
//https://github.com/topojson/world-atlas
const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

export default function Map(props) {
    
    return (
        <div class='map'>
            <ComposableMap>
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                    geographies.map(geo => (
                        geo.properties.REGION_UN === 'Americas' 
                            ? <Geography key={geo.rsmKey} geography={geo} /> 
                            : null
                        )
                    )}
                </Geographies>
            </ComposableMap>
        </div>
    )
}
