import { internshipProjects, personalProjects } from './projects';

export const email = 'samuelalexander0021@gmail.com';
export const github = 'https://github.com/SamuelAlex013';
const details = {
  'OutReach CRM': {
    title: 'OutReach CRM', short: 'Lead intake to reliable outreach', icon: 'database',
    intro: 'A backend for the work between finding a lead and running a campaign. Built at VideoDB, with provider integrations, reliable jobs, and a shared record of every interaction.',
    stack: ['TypeScript', 'NestJS', 'Next.js', 'PostgreSQL', 'Drizzle', 'Inngest'],
    contributions: ['Built lead-ingestion and account-management APIs with validation, API-key authentication, and transactional database writes.', 'Implemented campaign workflows, timezone-aware sending, and Smartlead, HeyReach, and Call.md integrations.', 'Added idempotent execution, outbox recovery, encrypted provider credentials, and shared pagination.'],
    notes: [['Retries should be safe', 'Idempotency keys and transactional writes keep repeated submissions from creating duplicate records.'], ['Jobs need a recovery path', 'An outbox and durable background jobs preserve work when provider calls or processes fail.'], ['The product has to ship', 'Maintained the Azure VM backend, Vercel frontend, and deployment and recovery runbooks.']],
    flow: [['intake', 'Lead intake', 'Forms, imports, and APIs', 'Validate incoming data and authenticate the submitting integration before creating or linking a contact.'], ['database', 'PostgreSQL', 'Accounts and activity', 'Persist contacts, accounts, campaigns, and their activity with transactional writes and scoped access.'], ['jobs', 'Background jobs', 'Schedule, retry, recover', 'Execute campaigns through durable jobs, timezone-aware schedules, idempotency, and outbox recovery.'], ['providers', 'Providers', 'Smartlead · HeyReach', 'Connect email and LinkedIn outreach providers, then reconcile their responses through webhooks.']],
  },
  'Computer Use / SkillPilot': {
    title: 'SkillPilot', short: 'Demonstrations into reusable skills', icon: 'workflow',
    intro: 'Record a desktop workflow once, turn the demonstration into a reusable skill, and replay it with verification. My work covered the recording pipeline, Python API, compilation, and durable execution.',
    stack: ['Python', 'FastAPI', 'VideoDB', 'VLMs', 'Windows automation'],
    contributions: ['Captured screen video, sampled frames, input events, and typed values for demonstrated workflows.', 'Built background skill compilation with versioned SKILL.json and SKILL.md artifacts.', 'Implemented queued replay, checkpoints, resume/cancel controls, and per-inference audit trails.'],
    notes: [['More than a screen recording', 'Input events and desktop context complement video evidence.'], ['Execution is inspectable', 'Screenshots and per-action verification make replay behavior reviewable.'], ['Interrupted work survives', 'Durable compilation and checkpoints let runs continue without discarding completed steps.']],
    flow: [['capture', 'Record', 'Video and input events', 'Capture what the user sees and does during the demonstrated workflow.'], ['frames', 'Understand', 'Sampled visual evidence', 'Use structured VLM analysis with frames and desktop context.'], ['file', 'Compile', 'Versioned skill artifacts', 'Produce SKILL.json and SKILL.md as reusable, versioned execution guidance.'], ['workflow', 'Replay', 'Checkpoints and checks', 'Execute the skill with screenshot verification, resumable state, and cancellation.']],
  },
  'EgoStandard Robotics Retrieval Benchmarking': {
    title: 'EgoStandard retrieval', short: 'Video search, measured carefully', icon: 'search',
    intro: 'A reproducible comparison of video-retrieval pipelines across a 100-hour robotics corpus. The work spans provider adapters, embeddings, temporal evaluation, and the operational details of long-running benchmarks.',
    stack: ['Python', 'FAISS', 'PyTorch', 'VideoDB', 'TwelveLabs', 'AWS Nova'],
    contributions: ['Completed H100 evaluations covering 2,835 videos and 11,369 queries.', 'Compared fixed four-second windows and VideoDB action boundaries using uniform 2 FPS sampling.', 'Corrected tokenizer and variable-frame sampling issues and evaluated each smaller subset against its own video corpus.'],
    notes: [['Keep the comparison fair', 'Sampling density, candidate corpus, tokenizer behavior, and evaluator contracts all affect the result.'], ['Measure the interval', 'Reported Hit@K and query success at temporal IoU thresholds, rather than treating any same-video result as a precise match.'], ['Preserve the campaign', 'Resumable jobs, saved state, and source artifacts make results reproducible.']],
    result: 'BGE Gemma reranking improved VideoDB Robo Hit@1 from 9.74% to 14.63% across all 11,369 H100 queries.',
    resultNote: 'A 4.89 percentage-point improvement on this benchmark; reranked candidates were scored for H100 rather than reused from a smaller subset.',
    flow: [['frames', 'Videos', '100-hour corpus', 'Prepare source videos and retain reproducible subset identity.'], ['layers', 'Index', 'Intervals and embeddings', 'Create normalized embeddings for fixed windows or action boundaries.'], ['search', 'Retrieve', 'Text queries and FAISS', 'Run exact inner-product retrieval and optional reranking.'], ['chart', 'Evaluate', 'Temporal overlap', 'Compute scoped retrieval metrics, verify coverage, and preserve result artifacts.']],
  },
  'Tracelet Robotics Dataset Export': {
    title: 'Tracelet exports', short: 'Search results into training data', icon: 'layers',
    intro: 'Export adapters inside Tracelet that turn selected video activities into usable robotics datasets. My contribution focused on format contracts, timing, input integrity, and proving that exported data can be read back.',
    stack: ['Python', 'LeRobot', 'RLDS/TFDS', 'MCAP', 'HDF5', 'Zarr', 'ROS 2'],
    contributions: ['Built adapters for six formats: LeRobot, RLDS, MCAP, HDF5, Zarr, and ROS bag.', 'Added timestamp provenance, bounded-batch writers, and stream-URL input support.', 'Verified exports with native readers and ROS 2 Jazzy playback, and rejected incomplete or corrupt media.'],
    notes: [['A file is not enough', 'Read-back checks verify actual values, shapes, timestamps, and image alignment.'], ['Keep memory bounded', 'Shared batch writers support longer recordings without retaining every payload in memory.'], ['Do not invent missing signals', 'Actions, rewards, calibration, and sensor streams stay absent when the source does not contain them.']],
    flow: [['search', 'Select', 'Video activity segments', 'Start with selected search results and explicit source references.'], ['frames', 'Prepare', 'Media and timestamps', 'Download, validate, and align media and numeric inputs.'], ['layers', 'Export', 'Six dataset formats', 'Write format-specific episodes using shared timing and bounded writers.'], ['check', 'Verify', 'Native readers', 'Reopen the output and check content, timing, and playback.']],
  },
  'chess-lens': {
    title: 'Chess Lens', short: 'A coach beside the chessboard', icon: 'chess',
    intro: 'A real-time chess coaching desktop app that reads a visible board, analyzes the position, and explains moves in an overlay. Built with a fast engine response followed by a more detailed LLM explanation.',
    stack: ['Electron', 'React', 'TypeScript', 'VideoDB', 'Chess engines', 'Vision models'],
    contributions: ['Connected screen capture and VideoDB RTStream indexing with a local screenshot fallback during warmup.', 'Built FEN extraction, engine evaluation, two-stage coaching, session history, and post-game summaries.', 'Improved screenshot FEN accuracy from 96.48% to 98.59% on a 142-frame test set.'],
    notes: [['Respond in stages', 'Show engine guidance promptly, then add the language-model explanation.'], ['Recover when the board disappears', 'Handle no-board states and keep the overlay usable across screen sizes.'], ['Check the source labels', 'Built and validated a 2,152-screenshot chess dataset, including 1,871 PGN cross-checks with zero mismatches.']],
    flow: [['capture', 'Capture', 'Visible chessboard', 'Read the current screen and locate the board.'], ['chess', 'Extract', 'Board position as FEN', 'Convert the visual position into a chess representation.'], ['chart', 'Analyze', 'Engine move and evaluation', 'Analyze the position with a chess engine.'], ['message', 'Coach', 'Overlay and explanations', 'Present instant guidance followed by a more detailed explanation.']],
  },
  'Archetype Video Description and Search Optimization': {
    title: 'Selective video analysis', short: 'Spend analysis where it matters', icon: 'frames',
    intro: 'A controlled experiment in deciding which video segments deserve deeper model analysis. Built a baseline first, then compared selection policies, description prompts, semantic judges, retrieval, and API-cost estimates.',
    stack: ['Python', 'FFmpeg', 'FAISS', 'YOLO', 'DINO', 'Jev', 'Vision APIs'],
    contributions: ['Completed 400 baseline description receipts across four models and six videos.', 'Built original-resolution 1 FPS sampling and independent five-second description windows with reusable caches and resumable execution.', 'Compared selection gates, prompt variants, and retrieval results in a review dashboard with source-video playback.'],
    notes: [['Preserve the evidence', 'Source hashes, prompts, raw responses, usage, and attempts stay attached to each run.'], ['Know what the metric means', 'Text matching, sampled-frame exposure, and temporal retrieval are separate measures.'], ['Count the full cost', 'Failed attempts, cache assumptions, and unknown usage remain visible in API-cost estimates.']],
    flow: [['frames', 'Sample', 'Original-resolution frames', 'Decode 1 FPS frames and retain source timing and hashes.'], ['filter', 'Select', 'Segment-level gates', 'Compare policies for retaining relevant activity.'], ['message', 'Describe', 'Independent windows', 'Produce model descriptions for five-second windows.'], ['search', 'Review', 'Retrieval and cost', 'Inspect what was retained, found, missed, and spent.']],
  },
  'Hand Annotation': {
    title: 'Hand annotation', short: 'Compare poses, frame by frame', icon: 'hand',
    intro: 'A local video-annotation app for comparing hand-pose models on the same frames. Combines local tracking and hosted vision endpoints with recoverable runs and inspectable outputs.',
    stack: ['Python', 'MediaPipe', 'WiLoR', 'PyTorch', 'CUDA', 'Vision APIs'],
    contributions: ['Integrated 21-point MediaPipe tracking and WiLoR dense 3D hand reconstruction.', 'Added exact-frame selection, hosted-model backends, bounded concurrency, and interrupted-run recovery.', 'Built reusable camera-wearer crops and mapped predicted joints back into full-frame coordinates.'],
    notes: [['Compare the same input', 'Reuse exact selected frames across models rather than comparing different samples.'], ['Separate confidence from accuracy', 'Per-joint confidence and inferred flags are retained; subjective scores are not ground truth.'], ['Keep outputs useful', 'Save overlays, coordinate exports, raw responses, failures, and usage for inspection.']],
    flow: [['frames', 'Choose', 'Video or exact frames', 'Choose repeatable input samples.'], ['filter', 'Crop', 'Camera-wearer hands', 'Keep crop coordinates and their original-frame mapping.'], ['hand', 'Infer', 'Local and hosted models', 'Run model-specific pose inference with saved receipts.'], ['file', 'Export', 'Overlays and landmarks', 'Write annotated video, image comparisons, and CSV/JSONL coordinates.']],
  },
};
const slug = text => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export const projects = [...internshipProjects, ...personalProjects].map(project => {
  const extra = details[project.title] || {};
  return { ...project, id: slug(project.title), icon: 'file', stack: [], ...extra, summary: extra.short || project.summary };
});
export const featured = Object.keys(details).map(title => projects.find(project => project.id === slug(title)));
export const categories = ['All areas', 'Backend', 'Automation', 'AI & video', 'Research', 'Applications', 'Writing'];
export const skills = [
  ['Languages', 'Python, TypeScript, JavaScript, SQL, C++'],
  ['Backend & data', 'FastAPI, Node.js, NestJS, PostgreSQL, Redis, Drizzle'],
  ['AI & video', 'PyTorch, FAISS, LLMs/VLMs, MediaPipe, FFmpeg'],
  ['Shipping', 'Docker, Git, Azure VMs, Vercel, automated testing'],
];
