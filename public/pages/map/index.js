import { ComposableMap, Geographies, Geography } from "react-simple-maps";
//https://www.react-simple-maps.io/docs/getting-started/
//https://github.com/topojson/world-atlas
const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

export default function Map(props) {
    
    return (
        <>
            <LineChart />
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
        </>
    )
}

function getTicks (count, max) {
	return [...Array(count).keys()].map(d => max / (count - 1) * parseInt(d))
}

let exdata = [
	{x: 0, y: 10}, 
    {x: 10, y: 40}, 
    {x: 20, y: 30}, 
    {x: 30, y: 70}, 
    {x: 40, y: 0}
];
const LineChart = (props) => {
    const data = props.data ?? exdata
    let WIDTH = 500;
    let HEIGHT = 300;
    let TICK_COUNT = 5;
    let MAX_X = Math.max(...data.map(d => d.x));
    let MAX_Y = Math.max(...data.map(d => d.y));
    
    let x = val => val / MAX_X * WIDTH;
    let y = val => HEIGHT - val / MAX_Y * HEIGHT;
    let x_ticks = getTicks(TICK_COUNT, MAX_X);
    let y_ticks = getTicks(TICK_COUNT, MAX_Y).reverse();
            
    let d = `M${x(data[0].x)} ${y(data[0].y)} ${data.slice(1).map(d => {
        return `L${x(d.x)} ${y(d.y)}`;
    }).join(' ')}`;

    return (
        <div class="LineChart" style={`width: ${WIDTH}px; height: ${HEIGHT}px`}>
            <svg width={WIDTH} height={HEIGHT}>
                <path d={d} />
            </svg>
            <div class="x-axis">
                {x_ticks.map(v => <div data-value={v} />)}
            </div>
            <div class="y-axis">
                {y_ticks.map(v => <div data-value={v} />)}
            </div>
        </div>
    );
}

