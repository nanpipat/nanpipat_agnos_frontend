import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { Delaunay } from "d3-delaunay";

interface Point {
  x: number;
  y: number;
  id: string;
}

interface VoronoiSelectorProps {
  width: number;
  height: number;
  points: Point[];
  onSelect: (id: string) => void;
  selectedArea: string | null;
}

const VoronoiSelector: React.FC<VoronoiSelectorProps> = ({
  width,
  height,
  points,
  onSelect,
  selectedArea,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const delaunay = Delaunay.from(
      points,
      (d) => d.x,
      (d) => d.y
    );
    const voronoi = delaunay.voronoi([0, 0, width, height]);

    svg
      .selectAll("path")
      .data(points)
      .enter()
      .append("path")
      .attr("d", (_, i) => voronoi.renderCell(i))
      .attr("fill", "transparent")
      .attr("stroke", "none")
      .style("cursor", "pointer")
      .on("click", (event, d) => {
        const [x, y] = d3.pointer(event);
        console.log(`Clicked at x: ${x}, y: ${y}`);
        onSelect(d.id);
      });
  }, [width, height, points, onSelect]);

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      style={{ position: "absolute", top: 0, left: 0, pointerEvents: "all" }}
    />
  );
};

export default VoronoiSelector;
