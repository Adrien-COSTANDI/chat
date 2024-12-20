<script lang="ts">
    import { onMount } from 'svelte';

    // Define the Cell type
    type Cell = {
        revealed: boolean;
        mine: boolean;
        adjacentMines: number;
    };

    // Set grid dimensions and number of mines
    let rows: number = 10;
    let cols: number = 10;
    let mines: number = 10;

    // Create the grid (2D array of Cell objects)
    let grid: Cell[][] = [];
    let gameOver: boolean = false;

    // Initialize the grid with default cells
    function initializeGrid(): void {
        grid = Array(rows).fill(null).map(() =>
            Array(cols).fill(null).map(() => ({
                revealed: false,
                mine: false,
                adjacentMines: 0
            }))
        );
        placeMines();
    }

    // Place mines randomly on the grid
    function placeMines(): void {
        let placedMines = 0;
        while (placedMines < mines) {
            const row = Math.floor(Math.random() * rows);
            const col = Math.floor(Math.random() * cols);
            if (!grid[row][col].mine) {
                grid[row][col].mine = true;
                placedMines++;
            }
        }
        calculateAdjacentMines();
    }

    // Calculate adjacent mines for each cell
    function calculateAdjacentMines(): void {
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (!grid[row][col].mine) {
                    let adjacentMines = 0;
                    for (let r = -1; r <= 1; r++) {
                        for (let c = -1; c <= 1; c++) {
                            if (
                                row + r >= 0 &&
                                row + r < rows &&
                                col + c >= 0 &&
                                col + c < cols &&
                                grid[row + r][col + c].mine
                            ) {
                                adjacentMines++;
                            }
                        }
                    }
                    grid[row][col].adjacentMines = adjacentMines;
                }
            }
        }
    }

    // Reveal the cell, handling game over if it's a mine
    function revealCell(row: number, col: number): void {
        if (gameOver || grid[row][col].revealed) return;

        grid[row][col].revealed = true;

        if (grid[row][col].mine) {
            gameOver = true;
            alert('Game Over!');
        } else if (grid[row][col].adjacentMines === 0) {
            revealAdjacentCells(row, col);
        }
    }

    // Reveal adjacent cells recursively
    function revealAdjacentCells(row: number, col: number): void {
        for (let r = -1; r <= 1; r++) {
            for (let c = -1; c <= 1; c++) {
                const newRow = row + r;
                const newCol = col + c;
                if (
                    newRow >= 0 &&
                    newRow < rows &&
                    newCol >= 0 &&
                    newCol < cols &&
                    !grid[newRow][newCol].revealed
                ) {
                    revealCell(newRow, newCol);
                }
            }
        }
    }

    // Initialize the grid when the component is mounted
    onMount(() => {
        initializeGrid();
    });
</script>

<style>
    .grid {
        display: grid;
        gap: 2px;
    }

    .cell {
        width: 30px;
        height: 30px;
        background-color: #ddd;
        border: 1px solid #aaa;
        text-align: center;
        line-height: 30px;
        cursor: pointer;
    }

    .revealed {
        background-color: #fff;
    }

    .mine {
        background-color: red;
    }
</style>

<div class="grid" style="grid-template-columns: repeat({cols}, 32px);">
    {#each grid as row, rowIndex}
        {#each row as cell, colIndex}
            <div
                    class="cell {cell.revealed ? 'revealed' : ''} {cell.mine ? 'mine' : ''}"
                    on:click={() => revealCell(rowIndex, colIndex)}>
                {#if cell.revealed && !cell.mine}
                    {cell.adjacentMines > 0 ? cell.adjacentMines : ''}
                {/if}
            </div>
        {/each}
    {/each}
</div>
