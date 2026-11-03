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
  'Open Record Replay': {
    title: 'Open Record Replay', short: 'Demonstrations into reusable skills', icon: 'workflow',
    intro: 'An open-source Python MCP server that turns desktop demonstrations into reusable AI-agent skills.',
    stack: ['Python', 'MCP', 'LLM APIs'],
    contributions: ['Built the MCP server and desktop-demonstration workflow.', 'Integrated model-generated outputs into structured, versioned skill artifacts.', 'Added configurable inputs and verification guidance for agents using the skills.'],
  },
  'Computer Use Application': {
    title: 'Computer-use application', short: 'Instructions into completed computer tasks', icon: 'workflow',
    intro: 'An instruction-driven application where an AI model interacts with a computer through an execution harness to complete user tasks.',
    stack: ['AI agents', 'Computer use', 'Execution harness'],
    contributions: ['Developed an instruction-driven desktop automation application during my VideoDB internship.', 'Integrated multiple model backends, reusable skills and output validation.', 'Demonstrated browser and spreadsheet workflows in a Windows VM.'],
    resultLabel: 'Business impact', result: 'Supported an enterprise deal.',
  },
  'EgoStandard Robotics Retrieval Benchmarking': {
    title: 'EgoStandard retrieval', short: 'Video search, measured carefully', icon: 'search',
    intro: 'A reproducible comparison of video-retrieval pipelines across a 100-hour robotics corpus. The work spans provider adapters, embeddings, temporal evaluation, and the operational details of long-running benchmarks.',
    stack: ['Python', 'FAISS', 'PyTorch', 'VideoDB', 'TwelveLabs', 'AWS Nova'],
    contributions: ['Completed evaluations covering 100 hours, 2,835 videos and 11,369 queries.', 'Integrated hosted and local models with resumable execution and temporal retrieval scoring.', 'Checked preprocessing and evaluated each smaller subset against its own video corpus.'],
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
    result: 'Reduced MCAP peak resident memory by 94.5% and LeRobot CPU time by 58.1%, preserving byte-identical format outputs and native-reader validation.',
    resultNote: 'Historical local measurements on one 30-second cached-media workload. The figures come from separate optimization comparisons; downloads and initial media extraction were excluded. These are workload-specific results, not production resource guarantees.',
    notes: [['A file is not enough', 'Read-back checks verify actual values, shapes, timestamps, and image alignment.'], ['Keep memory bounded', 'Shared batch writers support longer recordings without retaining every payload in memory.'], ['Do not invent missing signals', 'Actions, rewards, calibration, and sensor streams stay absent when the source does not contain them.']],
    flow: [['search', 'Select', 'Video activity segments', 'Start with selected search results and explicit source references.'], ['frames', 'Prepare', 'Media and timestamps', 'Download, validate, and align media and numeric inputs.'], ['layers', 'Export', 'Six dataset formats', 'Write format-specific episodes using shared timing and bounded writers.'], ['check', 'Verify', 'Native readers', 'Reopen the output and check content, timing, and playback.']],
  },
  'chess-lens': {
    title: 'Chess Lens', short: 'A coach beside the chessboard', icon: 'chess',
    intro: 'A real-time chess coaching desktop app that reads a visible board, analyzes the position, and explains moves in an overlay. Built with a fast engine response followed by a more detailed LLM explanation.',
    stack: ['Electron', 'React', 'TypeScript', 'VideoDB', 'Chess engines', 'Vision models'],
    contributions: ['Developed and internally launched the desktop application.', 'Built visual position extraction, engine-backed coaching, session history and post-game review.', 'Iterated on team feedback, board-state consistency and installation issues.'],
    notes: [['Respond in stages', 'Show engine guidance promptly, then add the language-model explanation.'], ['Recover when the board disappears', 'Handle no-board states and keep the overlay usable across screen sizes.'], ['Validate the input', 'Reviewed reference labels and recognition failures across board themes and perspectives.']],
    flow: [['capture', 'Capture', 'Visible chessboard', 'Read the current screen and locate the board.'], ['chess', 'Extract', 'Board position as FEN', 'Convert the visual position into a chess representation.'], ['chart', 'Analyze', 'Engine move and evaluation', 'Analyze the position with a chess engine.'], ['message', 'Coach', 'Overlay and explanations', 'Present instant guidance followed by a more detailed explanation.']],
  },
  'Archetype Video Description and Search Optimization': {
    title: 'Selective video analysis', short: 'Spend analysis where it matters', icon: 'frames',
    intro: 'A controlled experiment in deciding which video segments deserve deeper model analysis. Built a baseline first, then compared selection policies, description prompts, semantic judges, retrieval, and API-cost estimates.',
    stack: ['Python', 'FFmpeg', 'FAISS', 'YOLO', 'DINO', 'Jev', 'Vision APIs'],
    contributions: ['Built repeatable video-analysis experiments with reusable artifacts and resumable execution.', 'Compared selective analysis, retrieval quality and cost on scoped samples.', 'Built a review dashboard with source-video playback and visible experiment limitations.'],
    notes: [['Preserve the evidence', 'Source hashes, prompts, raw responses, usage, and attempts stay attached to each run.'], ['Know what the metric means', 'Text matching, sampled-frame exposure, and temporal retrieval are separate measures.'], ['Count the full cost', 'Failed attempts, cache assumptions, and unknown usage remain visible in API-cost estimates.']],
    flow: [['frames', 'Sample', 'Source video frames', 'Prepare repeatable inputs while retaining source provenance.'], ['filter', 'Select', 'Segment-level gates', 'Compare policies for retaining relevant activity.'], ['message', 'Describe', 'Independent windows', 'Produce model descriptions for selected video intervals.'], ['search', 'Review', 'Retrieval and cost', 'Inspect what was retained, found, missed, and spent.']],
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
