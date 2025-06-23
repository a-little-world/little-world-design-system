import { parseSync } from 'svgson';
// Parse SVG string to a structured object
export const parseSvg = (svgString: string) => {
    const parsed = parseSync(svgString);
    return {
      viewBox: parsed.attributes.viewBox || `0 0 ${parsed.attributes.width} ${parsed.attributes.height}`,
      paths: parsed.children.filter(child => child.name === 'path').map(path => ({
        d: path.attributes.d,
        ...path.attributes
      }))
    };
  };
  