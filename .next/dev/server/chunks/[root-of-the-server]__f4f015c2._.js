module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/api/size-recommendation/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
(()=>{
    const e = new Error("Cannot find module 'ai'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
async function POST(request) {
    try {
        const { handCircumference, handWidth, age, preference } = await request.json();
        const prompt = `You are an expert bangle size recommender. Based on the following customer information, recommend the perfect bangle size.

Hand Circumference: ${handCircumference}
Hand Width: ${handWidth || "Not provided"}
Age Group: ${age}
Preference: ${preference}

Consider:
- Hand circumference is the primary measurement for bangle sizing
- Typical bangle sizes range from 1.8" to 3.0" in diameter
- Children typically wear 1.8"-2.2"
- Teens typically wear 2.0"-2.4"
- Adults typically wear 2.2"-2.8"
- Seniors may need slightly looser sizes for comfort (2.4"-2.8")

Standard size conversions:
- Hand circumference 14-15cm = 2.0"-2.2" bangles
- Hand circumference 15-16cm = 2.2"-2.4" bangles
- Hand circumference 16-17cm = 2.4"-2.6" bangles
- Hand circumference 17-18cm = 2.6"-2.8" bangles
- Hand circumference 18+cm = 2.8"-3.0" bangles

Respond with ONLY the recommended bangle size (e.g., "2.4" or "2.6"). Do not include units or explanations.`;
        const { text } = await generateText({
            model: "openai/gpt-4o-mini",
            prompt
        });
        const size = text.trim().replace(/"/g, '"').replace(/"/g, '"');
        return Response.json({
            size
        });
    } catch (error) {
        console.error("Error generating recommendation:", error);
        return Response.json({
            error: "Failed to generate recommendation"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f4f015c2._.js.map