import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './app.vue.js';

function __VLS_template() {
let __VLS_ctx!: InstanceType<import('./__VLS_types.js').PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_localComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption & typeof __VLS_ctx;
let __VLS_otherComponents!: typeof __VLS_localComponents & import('./__VLS_types.js').GlobalComponents;
let __VLS_own!: import('./__VLS_types.js').SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; }) >;
let __VLS_components!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_templateComponents!: {};
{
({} as JSX.IntrinsicElements).section;
({} as JSX.IntrinsicElements).section;
(__VLS_x as JSX.IntrinsicElements)['section'] = {};
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("container home"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("grid"), };
{
({} as JSX.IntrinsicElements).img;
(__VLS_x as JSX.IntrinsicElements)['img'] = { src: ("~/assets/images/loader.svg"), alt: (""), };
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("grid loader"), };
{
({} as JSX.IntrinsicElements).label;
({} as JSX.IntrinsicElements).label;
(__VLS_x as JSX.IntrinsicElements)['label'] = { class: ("downloader"), for: (""), };
{
({} as JSX.IntrinsicElements).select;
({} as JSX.IntrinsicElements).select;
(__VLS_x as JSX.IntrinsicElements)['select'] = { name: (""), id: (""), };
{
({} as JSX.IntrinsicElements).option;
({} as JSX.IntrinsicElements).option;
(__VLS_x as JSX.IntrinsicElements)['option'] = { value: ("144px"), };
}
{
({} as JSX.IntrinsicElements).option;
({} as JSX.IntrinsicElements).option;
(__VLS_x as JSX.IntrinsicElements)['option'] = { value: ("240px"), };
}
{
({} as JSX.IntrinsicElements).option;
({} as JSX.IntrinsicElements).option;
(__VLS_x as JSX.IntrinsicElements)['option'] = { value: ("360px"), };
}
{
({} as JSX.IntrinsicElements).option;
({} as JSX.IntrinsicElements).option;
(__VLS_x as JSX.IntrinsicElements)['option'] = { value: ("480px"), };
}
{
({} as JSX.IntrinsicElements).option;
({} as JSX.IntrinsicElements).option;
(__VLS_x as JSX.IntrinsicElements)['option'] = { value: ("720px"), };
}
{
({} as JSX.IntrinsicElements).option;
({} as JSX.IntrinsicElements).option;
(__VLS_x as JSX.IntrinsicElements)['option'] = { value: ("px"), };
}
{
({} as JSX.IntrinsicElements).option;
({} as JSX.IntrinsicElements).option;
(__VLS_x as JSX.IntrinsicElements)['option'] = { value: ("px"), };
}
}
{
({} as JSX.IntrinsicElements).input;
({} as JSX.IntrinsicElements).input;
(__VLS_x as JSX.IntrinsicElements)['input'] = { ref: ("input"), value: ((__VLS_ctx.url)), type: ("text"), };
// @ts-ignore
(__VLS_ctx.input);
// @ts-ignore
[url, input,];
}
{
({} as JSX.IntrinsicElements).button;
({} as JSX.IntrinsicElements).button;
(__VLS_x as JSX.IntrinsicElements)['button'] = { class: ("btn btn-load"), };
type __VLS_0 = JSX.IntrinsicElements['button'];
const __VLS_1: import('./__VLS_types.js').EventObject<typeof undefined, 'click', {}, __VLS_0['onClick']> = {
click: (__VLS_ctx.loading)
};
// @ts-ignore
[loading,];
}
}
}
}
}
{
({} as JSX.IntrinsicElements).section;
({} as JSX.IntrinsicElements).section;
(__VLS_x as JSX.IntrinsicElements)['section'] = {};
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { id: ("result"), class: ("container result"), };
for (const [video] of (await import('./__VLS_types.js')).getVForSourceType(__VLS_ctx.videos)) {
// @ts-ignore
[videos,];
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("result-box"), };
{
({} as JSX.IntrinsicElements).img;
(__VLS_x as JSX.IntrinsicElements)['img'] = { 'style="width: 220px; height: 120px;"': ({}), src: ((video.snippet.thumbnails.standard.url)), alt: (""), };
}
{
({} as JSX.IntrinsicElements).h1;
({} as JSX.IntrinsicElements).h1;
(__VLS_x as JSX.IntrinsicElements)['h1'] = {};
(video.snippettitle);
}
{
({} as JSX.IntrinsicElements).button;
({} as JSX.IntrinsicElements).button;
(__VLS_x as JSX.IntrinsicElements)['button'] = {};
type __VLS_2 = JSX.IntrinsicElements['button'];
const __VLS_3: import('./__VLS_types.js').EventObject<typeof undefined, 'click', {}, __VLS_2['onClick']> = {
click: (() => __VLS_ctx.loadVideo())
};
// @ts-ignore
[loadVideo,];
}
}
}
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
declare var __VLS_slots: {};
return __VLS_slots;
}
