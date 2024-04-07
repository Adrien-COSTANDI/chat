<script lang="ts">
    import { getContext, setContext } from 'svelte';

    export let container: boolean = false;
    export let spacing: number = 0;
    export let xs: number | undefined = undefined;
    export let direction: 'row' | 'col' = 'row';
    export let justifyContent: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | undefined = undefined;
    export let alignItems: 'start' | 'end' | 'center' | 'baseline' | 'stretch' | undefined = undefined;

    spacing *= 8;

    const parentSpacing: number = getContext('spacing') || spacing;

    // Set the spacing context for child components
    setContext('spacing', parentSpacing);

    // Calculate class names based on props
    const marginClass = `gap-${parentSpacing}`;
    const directionClass = direction === 'col' ? 'flex-col' : 'flex-row';
    const justifyContentClass = justifyContent ? ({
        start: 'justify-start',
        end: 'justify-end',
        center: 'justify-center',
        between: 'justify-between',
        around: 'justify-around',
        evenly: 'justify-evenly'
    }[justifyContent]) : '';
    const alignItemsClass = alignItems ? ({
        start: 'items-start',
        end: 'items-end',
        center: 'items-center',
        baseline: 'items-baseline',
        stretch: 'items-stretch'
    }[alignItems]) : '';
    const flexClasses = `${container ? 'flex' : ''} ${directionClass} ${justifyContentClass} ${alignItemsClass}`;
    const marginStyle = container ? '' : `--margin:${parentSpacing}px`

    // Calculate width based on xs value
    const widthStyle = xs !== undefined ? `width: calc(${xs} * (100% / 12) - ${parentSpacing}px);` : '';
</script>


<div class="{$$props.class} {flexClasses} {marginClass} flex-wrap" style="{widthStyle}; {marginStyle}">
    <slot></slot>
</div>

<style>
    div:not(:last-child) {
        margin-right: var(--margin);
        margin-bottom: var(--margin);
    }
</style>
