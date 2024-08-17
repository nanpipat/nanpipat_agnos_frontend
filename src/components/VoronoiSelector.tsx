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
}

const VoronoiSelector: React.FC<VoronoiSelectorProps> = ({
  width,
  height,
  points,
  onSelect,
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
      .attr("stroke", "#ccc")
      .on("click", (event, d) => onSelect(d.id));
  }, [width, height, points, onSelect]);

  return <svg ref={svgRef} width={width} height={height}></svg>;
};

export default VoronoiSelector;
