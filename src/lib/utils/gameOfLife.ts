type GOLGrid = boolean[][];

export const RESOLUTION = 8;
const NEIGHBORS = [
	[-1, -1],
	[-1, 0],
	[-1, 1],
	[0, -1],
	[0, 1],
	[1, -1],
	[1, 0],
	[1, 1]
];
const FRAME_RATE = 500;

export const getPixelRatio = (canvas: HTMLCanvasElement) => {
	const context = canvas.getContext('2d');
	var backingStore =
		// @ts-ignore
		context.backingStorePixelRatio ||
		// @ts-ignore
		context.webkitBackingStorePixelRatio ||
		// @ts-ignore
		context.mozBackingStorePixelRatio ||
		// @ts-ignore
		context.msBackingStorePixelRatio ||
		// @ts-ignore
		context.oBackingStorePixelRatio ||
		1;

	return (window.devicePixelRatio || 1) / backingStore;
};

export const buildGrid = (COLS: number, ROWS: number): GOLGrid => {
	return new Array(COLS)
		.fill(null)
		.map(() => new Array(ROWS).fill(null).map(() => Boolean(Math.floor(Math.random() * 2))));
};

const getNextGen = (grid: GOLGrid, COLS: number, ROWS: number) => {
	const nextGen = structuredClone(grid);

	grid.forEach((col, colIdx) => {
		col.forEach((cell, rowIdx) => {
			const numNeighbors = NEIGHBORS.reduce(
				(acc, [x, y]) => acc + Number(grid[colIdx + x]?.[rowIdx + y]),
				0
			);
			// Rules of the Game
			// If the cell has too many or too few living neighbors it dies
			if (!!cell && (numNeighbors < 2 || numNeighbors > 3)) {
				nextGen[colIdx][rowIdx] = false;
				// If cell is dead and there are three living neighbors, cell comes alive from reproduction
			} else if (!cell && numNeighbors === 3) {
				nextGen[colIdx][rowIdx] = true;
			}
		});
	});
	return nextGen;
};

export const setCanvasSize = (canvas: HTMLCanvasElement) => {
	const ratio = getPixelRatio(canvas);
	const { parentElement } = canvas;
	if (!parentElement) return;

	let width = parentElement.clientWidth;
	let height = parentElement.clientHeight;

	canvas.width = width * ratio;
	canvas.height = height * ratio;
	canvas.style.width = `100%`;
	canvas.style.height = `100%`;
};

export const drawGrid = ({ grid, canvas }: { grid: GOLGrid; canvas: HTMLCanvasElement }) => {
	const ctx = canvas.getContext('2d');
	if (!ctx) return;
	grid.forEach((col, colIdx) =>
		col.forEach((cell, rowIdx) => {
			ctx.beginPath();
			ctx.rect(colIdx * RESOLUTION, rowIdx * RESOLUTION, RESOLUTION, RESOLUTION);
			ctx.fillStyle = cell ? '#0D3942ff' : '#103037ff';
			ctx.fill();
		})
	);
};

export const getDimensions = (canvas: HTMLCanvasElement): { cols: number; rows: number } => ({
	cols: Math.ceil(canvas.width / RESOLUTION),
	rows: Math.ceil(canvas.height / RESOLUTION)
});

export const getRenderer =
	({
		grid: lastGrid,
		canvas,
		setId
	}: {
		grid: GOLGrid;
		canvas: HTMLCanvasElement;
		setId: (id: number) => void;
	}) =>
	() => {
		setCanvasSize(canvas);
		const { cols, rows } = getDimensions(canvas);
		const grid = getNextGen(lastGrid, cols, rows);
		drawGrid({ grid, canvas });
		setTimeout(() => {
			setId(requestAnimationFrame(getRenderer({ grid, canvas, setId })));
		}, FRAME_RATE);
	};
