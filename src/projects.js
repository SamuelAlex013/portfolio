export const internshipProjects = [
  {
    "id": "computer-use-application",
    "title": "Computer Use Application",
    "category": "Automation",
    "origin": "VideoDB",
    "description": "Built an instruction-driven computer-use application with an execution harness for model-led task completion. Users provide instructions and an AI model interacts with the computer to carry out the task. The application supported an enterprise deal.",
    "summary": "An instruction-driven application that uses an AI model and execution harness to complete computer tasks."
  },
  {
    "id": "internship-0",
    "title": "chess-lens",
    "category": "Applications",
    "origin": "VideoDB",
    "description": "Built a real-time chess coaching desktop app that watches a visible chess board through screen capture, extracts the current position as FEN, runs engine analysis, and shows move guidance in a floating overlay. Key details included VideoDB screen RTStream visual indexing, a local screenshot fallback during RTStream warmup, Stockfish-style best-move/evaluation flow, two-stage coaching with instant engine tips followed by LLM explanations, session history, post-game summaries, no-board recovery states, API-key validation, installer scripts, and Electron/React packaging.",
    "summary": "Built a real-time chess coaching desktop app that watches a visible chess board through screen capture, extracts the current position as FEN, runs engine analysis, and shows move guidance in a floating overlay."
  },
  {
    "id": "internship-1",
    "title": "Chess FEN Benchmarking",
    "category": "Research",
    "origin": "VideoDB",
    "description": "Benchmarked chess-position extraction from screenshots, focusing on model accuracy, prompt quality, dataset reliability, and FEN generation from visual board states. Important work included building and verifying a 2,152-screenshot dataset across Lichess and chess.com themes, covering 155 board/piece theme combinations and multiple viewport sizes, testing Azure OpenAI vision fine-tuned models, validating all FEN labels with `python-chess`, cross-checking 1,871 entries against source PGNs with zero mismatches, adding ONNX board detection plus crop/sharpen preprocessing, and improving the screenshot FEN pipeline from 96.48% to 98.59% accuracy across 142 unseen test frames.",
    "summary": "Benchmarked chess-position extraction from screenshots, focusing on model accuracy, prompt quality, dataset reliability, and FEN generation from visual board states."
  },
  {
    "id": "internship-2",
    "title": "Open Record Replay",
    "category": "Automation",
    "origin": "VideoDB",
    "description": "Built Open Record Replay, an open-source Python MCP server that turns desktop demonstrations into reusable AI-agent skills. Integrated model-generated outputs into structured, versioned artifacts with configurable inputs and verification guidance.",
    "summary": "An open-source MCP server that turns desktop demonstrations into reusable AI-agent skills.",
    "github": "https://github.com/video-db/open-record-replay"
  },
  {
    "id": "internship-3",
    "title": "CRM Conference",
    "category": "Applications",
    "origin": "VideoDB",
    "description": "Built an Android conference contact capture app that records interactions using Meta Ray-Ban glasses or a phone camera, uploads clips to VideoDB, and extracts structured contact information. Work included a rolling video buffer, voice-triggered contact capture, phone-camera fallback, local contact and interaction storage, persistent contact lists, contact detail screens, in-app API-key entry, saved evidence clips, and mock-device support. Added queued background processing so saving one contact does not block capturing another, upload retries, offline pending-upload recovery, and retry support for failed contacts. Updated the architecture documentation to match the implemented app and organized the Android code into its own platform folder.",
    "summary": "Built an Android conference contact capture app that records interactions using Meta Ray-Ban glasses or a phone camera, uploads clips to VideoDB, and extracts structured contact information."
  },
  {
    "id": "internship-4",
    "title": "Hand Annotation",
    "category": "AI & video",
    "origin": "VideoDB",
    "description": "Built a local hand-movement video annotation app with MediaPipe 21-point skeleton tracking, optional wrist trails, and WiLoR dense 3D MANO reconstruction using CUDA PyTorch/FP16. Added Gemini, OpenAI, and custom vision endpoints, configurable sampling and bounded parallel requests, exact-frame selection for repeatable model comparisons, per-joint confidence and inferred-joint flags, and interrupted-run recovery that reuses saved predictions. Built reusable camera-wearer hand-crop datasets, mapped crop predictions back into full-frame coordinates, and compared crop-based inference with full-frame inference using neighboring-frame context. Ran local and hosted-model experiments and saved annotated videos, side-by-side comparisons, CSV/JSONL landmarks, raw responses, usage, latency, and failure records. Local video exports preserve original audio when available; sampled API previews retain source timestamps.",
    "summary": "Built a local hand-movement video annotation app with MediaPipe 21-point skeleton tracking, optional wrist trails, and WiLoR dense 3D MANO reconstruction using CUDA PyTorch/FP16."
  },
  {
    "id": "internship-5",
    "title": "VideoDB T2V Retrieval Benchmarking",
    "category": "Research",
    "origin": "VideoDB",
    "description": "Built the VideoDB text-to-video retrieval benchmarking pipeline, including dataset ingestion, video upload, scene indexing, semantic search, reranking, latency tracking, and recall evaluation. Crucial details included a two-phase setup/query design to avoid re-indexing expensive datasets, fresh or reusable VideoDB collections, persisted `collection_id` and video maps, parallel upload/index/search batches, `scene` index search with `stitch` and `rerank`, configurable score thresholds and top-k cutoffs, compiled playable stream URLs for evidence review, JSON result artifacts, latency query support, old-vs-new benchmark comparisons, and runs across MSR-VTT, MSVD, VATEX, QVHighlights, YouCook2, and DiDeMo.",
    "summary": "Built the VideoDB text-to-video retrieval benchmarking pipeline, including dataset ingestion, video upload, scene indexing, semantic search, reranking, latency tracking, and recall evaluation."
  },
  {
    "id": "internship-6",
    "title": "OutReach CRM",
    "category": "Backend",
    "origin": "VideoDB",
    "description": "Built and maintained a PostgreSQL-backed outreach CRM for lead intake, company records, campaign creation, inbox replies, follow-ups, pipeline management, provider integrations, and operational dashboards. Crucial details included Next.js web UI, NestJS API, Drizzle/PostgreSQL schema work, Inngest background jobs, transactional outbox recovery, idempotent provider execution, per-user encrypted provider credentials, inbound lead-ingestion API keys, Smartlead and HeyReach webhook handling, duplicate/unrelated reply protection, timezone-aware campaign sending, Call.md meeting/company records, shared pagination across CRM views, restored production UI layouts, Azure VM backend deployment, Vercel frontend deployment, and deployment runbook/operations work.",
    "summary": "Built and maintained a PostgreSQL-backed outreach CRM for lead intake, company records, campaign creation, inbox replies, follow-ups, pipeline management, provider integrations, and operational dashboards."
  },
  {
    "id": "internship-7",
    "title": "VideoDB vs TwelveLabs Dashboard",
    "category": "Applications",
    "origin": "VideoDB",
    "description": "Built a private comparison dashboard for evaluating VideoDB and TwelveLabs video search results. Key details included guided replay of stored benchmark queries, live side-by-side provider search, timestamped ranked playback, benchmark tables for R@1/R@3/R@10/R@50, dataset-level benchmark provenance, Firebase Google authentication restricted to allowed domains, Search Studio integration, VideoDB collection search through the official SDK, TwelveLabs v1.3 multipart search integration, deferred stream generation for lower latency, safe server-only provider keys, protected API routes, and Vercel deployment setup.",
    "summary": "Built a private comparison dashboard for evaluating VideoDB and TwelveLabs video search results."
  },
  {
    "id": "internship-8",
    "title": "Computer Use Benchmarking",
    "category": "Automation",
    "origin": "VideoDB",
    "description": "Worked on computer-use benchmark infrastructure and adapters for evaluating model-driven desktop control. Crucial details included Windows Agent Arena integration, Holo 35B native computer-tool contract support, model action/retry hardening, Chrome CDP setup, VM-based benchmark execution, OSWorld/WindowsAgentArena environment investigation, and compatibility fixes needed to run browser and desktop tasks reliably in Windows automation benchmarks.",
    "summary": "Worked on computer-use benchmark infrastructure and adapters for evaluating model-driven desktop control."
  },
  {
    "id": "internship-9",
    "title": "STT and TTS Benchmarking",
    "category": "Research",
    "origin": "VideoDB",
    "description": "Benchmarked speech-to-text and text-to-speech workflows, comparing output quality, pipeline reliability, and runtime characteristics. TTS work included the Dataset VM benchmark pipeline, IndicVoices-R data, fixed smoke-suite validation, 4,400-row local dataset verification, Indic Parler-TTS offline runs, Saaras V3 ASR transcription in verbatim mode, CER/WER/G2P/PER/audio-health/latency scoring, checksum-validated artifacts, batch ledgers, cached audio reuse, and reusable synthesize/transcribe/score/submit stages. STT work included multilingual and Hinglish evaluation, modular local/cloud provider support, comparisons involving Trelis, AssemblyAI, and Sarvam, Gemini-based transcript normalization, WER/CER scoring, processing real-time factor, end-to-end latency, and targeted retries that preserve completed results. Submitted benchmark results to the existing evaluation service.",
    "summary": "Benchmarked speech-to-text and text-to-speech workflows, comparing output quality, pipeline reliability, and runtime characteristics."
  },
  {
    "id": "internship-10",
    "title": "Reranker Benchmarking",
    "category": "Research",
    "origin": "VideoDB",
    "description": "Built and ran retrieval reranking benchmarks covering VideoDB rerank settings, LLM reranking, and local BGE Gemma reranking. Compared relevance ordering, latency, and retrieval metrics using preserved candidate sets, configurable top-k depths, same-collection reruns, and saved before/after artifacts. Completed H100 BGE Gemma reranking for all 11,369 queries and 568,450 candidates without reusing smaller-subset reranked results; VideoDB Robo Hit@1 increased from 9.74% to 14.63% on that run. Also reranked the Archetype V4 description indexes for four models, evaluated different candidate depths, and independently checked query-level hits and annotated-interval coverage.",
    "summary": "Built and ran retrieval reranking benchmarks covering VideoDB rerank settings, LLM reranking, and local BGE Gemma reranking."
  },
  {
    "id": "internship-11",
    "title": "Open Record Replay",
    "category": "Automation",
    "origin": "VideoDB",
    "description": "Built an MCP-based record-and-replay system that records desktop workflows and compiles demonstrations into reusable agent skills. Crucial details included native accessibility/input-event capture, typed-value capture, optional screen video upload to VideoDB, scene descriptions for visual reference, LLM-generated `SKILL.json` and `SKILL.md`, global skill installation for agent clients, compact scene-index descriptions, improved skill-file generation, generated execution guidance, versioned skill artifacts, and reusable MCP tooling/config generation for Claude, Cursor, VS Code, OpenCode, Cline, and Roo.",
    "summary": "Built an MCP-based record-and-replay system that records desktop workflows and compiles demonstrations into reusable agent skills."
  },
  {
    "id": "internship-12",
    "title": "mentraOS",
    "category": "AI & video",
    "origin": "VideoDB",
    "description": "Built a Mentra smart-glasses integration using Bun/TypeScript, the Mentra SDK, and VideoDB for capture, upload, indexing, and search. Implemented phone-browser recording, WebM-to-MP4 media handling through FFmpeg, upload handling with `multer`, and session-specific video tracking for concurrent uploads. Fixed webhook/session initialization, video-ID resolution after upload, Windows recording shutdown, orphaned FFmpeg cleanup, and indexing behavior for recordings without audio. Verified the upload, indexing, search, and delete flow.",
    "summary": "Built a Mentra smart-glasses integration using Bun/TypeScript, the Mentra SDK, and VideoDB for capture, upload, indexing, and search."
  },
  {
    "id": "internship-13",
    "title": "engineering-blog",
    "category": "Writing",
    "origin": "VideoDB",
    "description": "Wrote technical research and field-note content for VideoDB Labs, including \"What video retrieval benchmarks taught us about ground truth\" and robotics-focused work on WGO-Bench action annotation. The writing translated benchmark evidence into practical engineering guidance, covering dataset ambiguity, retrieval evaluation failure modes, human/robot video annotation, and how video systems can become searchable memory for AI and robotics workflows.",
    "summary": "Wrote technical research and field-note content for VideoDB Labs, including \"What video retrieval benchmarks taught us about ground truth\" and robotics-focused work on WGO-Bench action annotation."
  },
  {
    "id": "internship-14",
    "title": "Robotics / WGO-Bench Action Annotation",
    "category": "Research",
    "origin": "VideoDB",
    "description": "Worked on robotics-oriented video understanding research using WGO-Bench, covering human egocentric activity and robot manipulation videos from DROID, Galaxea, and HomER. The work included reviewing 100 videos, producing a revised 534-segment action reference, evaluating VideoDB against MacroData Refiner 0.3.7 with Gemini 3.7 Flash, and reporting that VideoDB reached 28.93% semantic F1 versus 19.92% for Refiner at IoU 0.5 (+9.01 percentage points). The evaluation covered action segmentation, label accuracy, temporal boundaries, and semantic judging with GPT-5.5.",
    "summary": "Worked on robotics-oriented video understanding research using WGO-Bench, covering human egocentric activity and robot manipulation videos from DROID, Galaxea, and HomER."
  },
  {
    "id": "internship-15",
    "title": "Tracelet Robotics Dataset Export",
    "category": "Backend",
    "origin": "VideoDB",
    "description": "Built export adapters within Tracelet for converting selected VideoDB activity segments into LeRobot v2.1, RLDS/TFDS, MCAP with Foxglove and ROS 2 profiles, HDF5, Zarr, and ROS bag. Work included reference-driven schemas, image observations, episode/task metadata, source state/action vectors, timestamp provenance, shared bounded-batch writers, native-reader verification, and ROS 2 Jazzy playback checks. Benchmarked conversion time, CPU/memory use, output size, and read-back behavior while preserving existing adapter outputs. Added stream-URL input support, download retries, rejection of incomplete or corrupt media, and sanitized diagnostics. Verified a live search-result export across all seven formats/profiles and documented missing source signals rather than inventing actions, rewards, calibration, or sensor data.",
    "summary": "Built export adapters within Tracelet for converting selected VideoDB activity segments into LeRobot v2.1, RLDS/TFDS, MCAP with Foxglove and ROS 2 profiles, HDF5, Zarr, and ROS bag."
  },
  {
    "id": "internship-16",
    "title": "Meta Wearables VideoDB Capture and Search",
    "category": "AI & video",
    "origin": "VideoDB",
    "description": "Extended the Meta DAT Android camera sample with VideoDB upload, scene indexing, and semantic search. Fixed scene-index endpoints, indexing-status polling, nested search-response parsing, and search-panel visibility. Added RTStream reuse and shutdown handling to prevent duplicate or abandoned streams. Extended mock-device testing and built a phone-side preview of the glasses display so display layouts and controls could be tested without physical glasses.",
    "summary": "Extended the Meta DAT Android camera sample with VideoDB upload, scene indexing, and semantic search."
  },
  {
    "id": "internship-17",
    "title": "VisionClaw-style VideoDB SDK Prototype",
    "category": "AI & video",
    "origin": "VideoDB",
    "description": "Built a prototype SDK for VisionClaw-style capture and perception workflows backed by VideoDB. Implemented webcam/file capture abstractions, a live perception session, typed models, HTTP/error handling, and CLI commands for perception, questions, snapshots, and search. Created mobile mock clients and tests for session events, scene labels, transcripts, summaries, and search, allowing integration behavior to be exercised without live wearable hardware or backend inference.",
    "summary": "Built a prototype SDK for VisionClaw-style capture and perception workflows backed by VideoDB."
  },
  {
    "id": "internship-18",
    "title": "EgoStandard Robotics Retrieval Benchmarking",
    "category": "Research",
    "origin": "VideoDB",
    "description": "Built and operated robotics video-retrieval benchmarks comparing VideoDB Robo, TwelveLabs, AWS Nova, and local embedding pipelines including Cosmos, SigLIP2, PE-AV, Qwen3-VL Embedding, and InternVideo2. Work included cumulative dataset subsets, provider adapters, video preprocessing, normalized embeddings, exact FAISS search, resumable jobs, persisted run state, throughput monitoring, and separate ingestion/search cost and latency reporting. Completed H100 evaluations covering 2,835 videos, approximately 100 hours, and 11,369 queries. Compared fixed four-second windows against VideoDB action boundaries using uniform 2 FPS sampling, corrected tokenizer and variable-frame sampling issues, and recomputed smaller-subset results against each subset's own corpus. Audited Hit@K and temporal-IoU query-success metrics, including floating-point boundary discrepancies, and preserved reproducible reports and source artifacts.",
    "summary": "Built and operated robotics video-retrieval benchmarks comparing VideoDB Robo, TwelveLabs, AWS Nova, and local embedding pipelines including Cosmos, SigLIP2, PE-AV, Qwen3-VL Embedding, and InternVideo2."
  },
  {
    "id": "internship-19",
    "title": "Efficient Sampling and Model Routing Experiments",
    "category": "AI & video",
    "origin": "VideoDB",
    "description": "Built a configurable segment-routing experiment and review dashboard to test which video windows should be skipped or sent for deeper analysis. Compared Jev 0.8B, Jev 9B, and an OpenAI router using `none/small/large` decisions and later binary domain-trigger prompts. Ran comparisons with five-second windows at 2 FPS, two-second windows at 1 FPS, and three-second windows with two sampled frames. Added human interval annotation, saved routing decisions and visual reviews, measured annotated-time retention and invalid skips, and tested pedestrian crop-based routing. Published the experiment code with portable setup and preserved run evidence. These experiments evaluated router behavior; downstream small/large VLM analysis and search were not run in this project.",
    "summary": "Built a configurable segment-routing experiment and review dashboard to test which video windows should be skipped or sent for deeper analysis."
  },
  {
    "id": "internship-20",
    "title": "Archetype Video Description and Search Optimization",
    "category": "AI & video",
    "origin": "VideoDB",
    "description": "Built a local-video experiment pipeline using original-resolution 1 FPS frames and independent five-second description windows. Added provider adapters, reusable frame caches, source/prompt/config hashes, resumable execution, raw-response preservation, normalized usage accounting, and API-cost estimates with explicit unknowns. Completed a four-model, six-video baseline containing 400 successful description receipts. Evaluated DINO/YOLO selection, a pretrained VadCLIP checkpoint, Jev still-image prompts, domain prompts, and contact-sheet gates for retaining useful activity while reducing description calls. Compared semantic judges and description-prompt variants, built text-embedding/FAISS search over the saved descriptions, and measured retrieval against reviewed event intervals. Preserved separate measures for text matching, sampled-frame exposure, temporal retrieval, and cost estimates.",
    "summary": "Built a local-video experiment pipeline using original-resolution 1 FPS frames and independent five-second description windows."
  },
  {
    "id": "internship-21",
    "title": "Anomaly Search Review Dashboard",
    "category": "Applications",
    "origin": "VideoDB",
    "description": "Built and published a self-explanatory dashboard for the Archetype experiments with source-video playback, accepted/skipped segment timelines, exact Jev inputs and outputs, model descriptions, semantic-match results, and cost comparisons. Added model and prompt-version comparisons, per-video event coverage, retrieval Hit@K results, reranking comparisons, full model names, and explanatory metric text. Packaged the dashboard for deployment and checked the published view against the saved experiment results.",
    "summary": "Built and published a self-explanatory dashboard for the Archetype experiments with source-video playback, accepted/skipped segment timelines, exact Jev inputs and outputs, model descriptions, semantic-match results, and cost comparisons."
  },
  {
    "id": "internship-22",
    "title": "Frame Accessibility Research Blog",
    "category": "Writing",
    "origin": "VideoDB",
    "description": "Wrote and built the HTML research article \"Frame access that keeps research moving\" for robotics researchers. Developed concrete examples connecting action search, interval selection, frame sampling, playable evidence, and source provenance. Added retrieval and local-model comparison material, diagrams, expandable tables, and latency figures checked against the source report. Explained source-count and stream-duration scaling mechanisms while distinguishing published stream-generation measurements from qualitative cost reasoning. Refined the writing and layout and verified desktop/mobile rendering and interactive controls.",
    "summary": "Wrote and built the HTML research article \"Frame access that keeps research moving\" for robotics researchers."
  }
];

export const personalProjects = [
  { id: 'credit-approval', title: 'Credit Approval', category: 'Backend', origin: 'Independent', summary: 'Loan eligibility APIs with credit scoring and background data processing.', description: 'Built a Django backend to process customer and loan data, calculate credit scores, and manage approvals using REST APIs, Celery workers, PostgreSQL, Redis, and Docker.', github: 'https://github.com/SamuelAlex013/Credit_Approval_backend' },
  { id: 'db-manager', title: 'DB Manager', category: 'Backend', origin: 'Independent', summary: 'A secure workspace for structured and JSON data.', description: 'Built a full-stack CRUD system with Next.js, FastAPI, SQLAlchemy, Clerk authentication, JWT security, and user-scoped access.', github: 'https://github.com/SamuelAlex013/DB_Manager' },
  { id: 'booking-agent', title: 'AI Booking Agent', category: 'Automation', origin: 'Independent', summary: 'Natural-language scheduling connected to Google Calendar.', description: 'Built a calendar assistant using FastAPI, LangChain, and Streamlit to turn natural-language requests into calendar events.', github: 'https://github.com/SamuelAlex013/AI-booking-agent', demo: 'https://ai-booking-agent.streamlit.app/' },
  { id: 'reddit-persona', title: 'Reddit Persona Generator', category: 'AI & video', origin: 'Independent', summary: 'LLM-generated personas with links back to the source evidence.', description: 'Built a Python pipeline that retrieves public Reddit posts and comments, generates personas, and maps insights back to source citations.', github: 'https://github.com/SamuelAlex013/reddit-persona-generator' },
  { id: 'earth911', title: 'Earth911 Scraper', category: 'Automation', origin: 'Independent', summary: 'An LLM-assisted scraper for recycling-location information.', description: 'Built an LLM-assisted scraping workflow to retrieve information from the Earth911 website.', github: 'https://github.com/SamuelAlex013/Earth911_Scraper' },
  { id: 'analytics', title: 'Analytics Dashboard', category: 'Applications', origin: 'Independent', summary: 'An interactive analytics interface built for exploring data.', description: 'Built an interactive web dashboard with a focus on data presentation and UI interactions.', github: 'https://github.com/SamuelAlex013/AI_Analytics_Dashboard', demo: 'https://analyticsdashboard23.netlify.app/' },
  { id: 'court-case', title: 'Court Case Fetcher', category: 'Automation', origin: 'Independent', summary: 'A web interface for retrieving Delhi High Court case information.', description: 'Built a web scraping application that retrieves case information from the Delhi High Court.', github: 'https://github.com/SamuelAlex013/Case_Fetcher' },
  { id: 'stocks', title: 'Stock Market Prediction', category: 'Research', origin: 'Independent', summary: 'Time-series forecasting experiments with LSTM and GRU models.', description: 'Explored stock-market forecasting using TensorFlow, scikit-learn, LSTM, and GRU models.', github: 'https://github.com/SamuelAlex013/Stock-Market-prediction' },
  { id: 'ecommerce', title: 'E-commerce Web App', category: 'Applications', origin: 'Independent', summary: 'A full-stack web store using React, Express, and MongoDB.', description: 'Built a full-stack e-commerce application with React, Express.js, and MongoDB.', github: 'https://github.com/SamuelAlex013/E-commerce' },
  { id: 'mini-os', title: 'Mini OS', category: 'Backend', origin: 'Independent', summary: 'A small operating-system project built close to the machine.', description: 'Built an operating-system project using C, Assembly, and the GRUB bootloader.', github: 'https://github.com/SamuelAlex013/PBL-OS' }
];
