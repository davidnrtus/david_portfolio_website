<template>
  <div>
    <div id="win">
      <div id="titlebar">
        <div class="lights"><i /><i /><i /></div>
        <div class="tab">david@portfolio: ~ — zsh</div>
        <div class="right hide-m"><span>⌥1</span><span>120×40</span></div>
      </div>

      <div id="body">
        <div id="gate" role="button" tabindex="0" aria-label="Press Enter to access">
          <div class="cmt">// portfolio.ts</div>
          <div class="big"><span id="gate-text" /><span class="cur" /></div>
          <div id="gate-hint" class="hint">
            <span class="key">Press <kbd>Enter</kbd> to run</span>
            <span class="tap">Tap anywhere to run</span>
          </div>
        </div>

        <main id="term" aria-live="polite">
          <div id="out" />
          <div id="inline" class="hidden"><span class="ps1" /><span id="typed" class="typed" /><span id="caret" /><span id="ghost" class="faint" /></div>
        </main>
      </div>

      <div id="status">
        <div class="seg hi">portfolio</div>
        <div class="seg">0:zsh*</div>
        <div id="mode" class="seg mode">-- INSERT --</div>
        <div class="grow" />
        <div class="seg hide-m">typescript · vue</div>
        <div id="clock" class="seg">00:00</div>
      </div>
    </div>
    <input id="hidden-input" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-hidden="true">
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { ME, type Project } from '~/data/portfolio'

onMounted(() => {
  /* =====================================================================
     ENGINE — ported verbatim from the standalone terminal, driven by ME.
     ===================================================================== */
  const $ = (s: string) => document.querySelector(s) as HTMLElement

  const gate = $('#gate'), gateText = $('#gate-text'), gateHint = $('#gate-hint')
  const term = $('#term'), out = $('#out'), inlineEl = $('#inline'), typedEl = $('#typed'), caret = $('#caret')
  const hidden = $('#hidden-input') as HTMLInputElement, modeEl = $('#mode')
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches

  let cwd = '~'
  const PS1 = () => `<span class="ps1"><span class="who">${ME.user}@${ME.host}</span> <span class="dir">${cwd}</span>\n<span class="arrow">❯</span> </span>`
  const setPrompt = () => { inlineEl.querySelector('.ps1')!.outerHTML = PS1() }
  setPrompt()

  const esc = (s: unknown) => String(s).replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c] as string))
  const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, reduce ? 0 : ms))
  let pinEl: HTMLElement | null = null
  const scroll = () => {
    if (pinEl) term.scrollTop = Math.max(0, pinEl.offsetTop - term.clientTop)
    else term.scrollTop = term.scrollHeight
  }
  const pad = (s: unknown, n: number) => String(s).padEnd(n)

  function print(html = '', cls = '') { const d = document.createElement('div'); d.className = 'line' + (cls ? ' ' + cls : ''); d.innerHTML = html; out.appendChild(d); scroll(); return d }
  async function printCmd(cmd: string) {
    const d = print(PS1()); const span = document.createElement('span'); span.className = 'cmd'; d.appendChild(span)
    for (const ch of cmd) { span.textContent += ch; await sleep(40 + Math.random() * 40) } await sleep(160)
    return d
  }
  const codeLine = (n: number | string, html: string) => print(`<span class="ln">${n}</span>${html}`)

  /* ---------- renderers ---------- */
  function renderWhoami() {
    // syntax-highlighted TypeScript object
    let n = 1
    codeLine(n++, `<span class="vio">const</span> <span class="amb b glow">developer</span> = {`)
    codeLine(n++, `  <span class="key">name</span>:       <span class="str">"${esc(ME.name)}"</span>,`)
    codeLine(n++, `  <span class="key">title</span>:      <span class="str">"${esc(ME.title)}"</span>,`)
    codeLine(n++, `  <span class="key">location</span>:   <span class="str">"${esc(ME.location)}"</span>,`)
    codeLine(n++, `  <span class="key">openToWork</span>: <span class="vio">true</span>,`)
    codeLine(n++, `}`)
    codeLine(n++, ``)
    codeLine(n++, `<span class="dim">/**</span>`)
    ME.bio.forEach(l => codeLine(n++, `<span class="dim"> * ${esc(l)}</span>`))
    codeLine(n++, `<span class="dim"> */</span>`)
  }
  function renderExperience() {
    print(`<span class="dim">$ cat experience.log</span>`)
    print(`<span class="faint"># ${ME.experience.length} entries, newest first</span>`)
    print('')
    ME.experience.forEach(e => {
      print(`<span class="amb">${esc(pad(e.period, 13))}</span><span class="b">${esc(e.company)}</span>  <span class="dim">${esc(e.role)}</span>`)
      e.notes.forEach(nn => print(`<span class="ind"><span class="dim">·</span> ${esc(nn)}</span>`))
      print('')
    })
  }
  function projectBlock(p: Project) {
    const ext = p.lang === 'Kotlin' ? 'kt' : p.lang === 'Dart' ? 'dart' : 'ts'
    const kv = (k: string) => `<span class="key">${esc(k)}</span>:${' '.repeat(Math.max(1, 8 - k.length))}`
    let n = 1
    codeLine(n++, `<span class="faint">// ${esc(p.id)}.${ext}</span>`)
    codeLine(n++, `<span class="vio">export const</span> <span class="amb b glow">${esc(p.id)}</span> = {`)
    codeLine(n++, `  ${kv('name')}<span class="str">"${esc(p.name)}"</span>,`)
    codeLine(n++, `  ${kv('year')}<span class="num">${p.year}</span>,`)
    codeLine(n++, `  ${kv('tagline')}<span class="str">"${esc(p.tagline)}"</span>,`)
    codeLine(n++, `  ${kv('stack')}[${p.stack.map(s => `<span class="str">"${esc(s)}"</span>`).join(', ')}],`)
    if (p.link) codeLine(n++, `  ${kv('url')}<span class="str">"<a href="${p.link}" target="_blank" rel="noopener">${esc(p.link)}</a>"</span>,`)
    codeLine(n++, ``)
    codeLine(n++, `  <span class="dim">/**</span>`)
    p.desc.forEach(l => codeLine(n++, `<span class="dim">   * ${esc(l)}</span>`))
    codeLine(n++, `<span class="dim">   */</span>`)
    codeLine(n++, `}`)
  }
  function renderProjects() {
    print(`<span class="dim">$ cat ~/projects/*</span>`)
    print(`<span class="faint"># ${ME.projects.length} entries, newest first</span>`)
    print('')
    ME.projects.forEach((p, i) => { projectBlock(p); print(''); if (i < ME.projects.length - 1) print('') })
    print(`<span class="faint"># filter one:</span> <span class="cmd">project ${ME.projects[0].id}</span>`)
  }
  function renderProject(id: string) {
    const p = ME.projects.find(x => x.id === id)
    if (!p) return print(`<span class="err">cat: projects/${esc(id || '')}: No such file or directory</span>  <span class="dim">→</span> <span class="cmd">projects</span>`)
    projectBlock(p)
  }
  function renderSkills() {
    print(`<span class="dim">$ ./skills --graph</span>`)
    print('')
    const w = Math.max(...ME.skills.map(s => s[0].length)) + 2
    ME.skills.forEach(([k, v]) => {
      const full = '█'.repeat(v), empty = '░'.repeat(10 - v)
      print(`${esc(pad(k, w))}<span class="bar">${full}</span><span class="bar-e">${empty}</span>`)
    })
  }
  function renderContact() {
    const c = ME.contact
    print(`<span class="dim">$ cat ~/.contactrc</span>`)
    print('')
    print(`<span class="vio">[${esc(ME.user)}]</span>`)
    const row = (k: string, v: string, href?: string) => v && print(`<span class="key">${pad(k, 10)}</span>= <span class="str">"${href ? `<a href="${href}" target="_blank" rel="noopener">${esc(v)}</a>` : esc(v)}"</span>`)
    row('email', c.email, `mailto:${c.email}`)
    row('phone', c.phone, `tel:${c.phone.replace(/\s/g, '')}`)
    row('linkedin', c.linkedin, c.linkedin)
    row('github', c.github, c.github)
    row('cv', c.cv, c.cv)
    print('')
    print(`<span class="faint"># or from here:</span> <span class="cmd">send Hi David, I'd like to talk about…</span>`)
  }
  function renderHelp() {
    const rows: [string, string][] = [
      ['whoami', 'who I am'], ['experience', 'companies and roles'], ['projects', 'everything I\'ve built, as source'],
      ['project <id>', 'filter to one'], ['skills', 'skill graph'], ['contact', '~/.contactrc'],
      ['email · phone · linkedin · github · cv', 'one thing, fast'], ['send <message>', 'email me from the prompt'],
      ['theme <amber|green|mono>', 'change phosphor'], ['clear', 'Ctrl+L works too'],
    ]
    const w = Math.max(...rows.map(r => r[0].length)) + 2
    print(`<span class="dim">Usage:</span> <span class="cmd">&lt;command&gt; [args]</span>`); print('')
    rows.forEach(([c, d]) => print(`  <span class="amb">${esc(pad(c, w))}</span><span class="dim">${esc(d)}</span>`))
    print(''); print(`<span class="faint">Tab completes · ↑↓ history · Ctrl+C cancels</span>`)
  }

  /* ---------- commands ---------- */
  const history: string[] = []; let hIdx = -1; let buffer = ''
  const ghostEl = $('#ghost')
  const SUGGEST = ['help', 'experience', 'ls projects', 'skills', 'contact']   // guided path, in order
  let sIdx = 0
  function suggestion() {
    if (!buffer) return SUGGEST[sIdx] || ''
    const q = buffer.toLowerCase()
    const m = [...SUGGEST, ...COMMANDS].find(c => c.startsWith(q) && c !== q)
    return m ? m.slice(buffer.length) : ''
  }
  function updateGhost() { ghostEl.textContent = ready ? suggestion() : '' }
  const COMMANDS = ['help', 'whoami', 'about', 'experience', 'projects', 'project', 'skills', 'contact', 'email', 'phone', 'linkedin', 'github', 'cv', 'resume', 'send', 'theme', 'clear', 'history', 'banner', 'exit', 'sudo', 'ls', 'cat', 'pwd', 'cd', 'neofetch', 'echo', 'rm', 'vim', 'nano']

  async function run(raw: string) {
    const input = raw.trim()
    pinEl = print(PS1() + `<span class="cmd">${esc(input)}</span>`)
    if (!input) return
    history.push(input); hIdx = history.length
    if (SUGGEST[sIdx] && input.toLowerCase() === SUGGEST[sIdx]) sIdx++
    const [cmd, ...rest] = input.split(/\s+/); const arg = rest.join(' ')
    const pid = (a: string) => a.replace(/^~?\/?projects\//, '').replace(/\/$/, '').replace(/\.(kt|ts|dart)$/, '')

    switch (cmd.toLowerCase()) {
      case 'help': case '?': case 'man': renderHelp(); break
      case 'whoami': case 'about': case 'neofetch': renderWhoami(); break
      case 'experience': case 'work': case 'companies': renderExperience(); break
      case 'projects': renderProjects(); break
      case 'ls': if (!arg || /projects/.test(arg) || cwd === '~/projects') renderProjects(); else print(`<span class="dir">projects</span>  <span class="dim">experience.log  .contactrc  README.md</span>`); break
      case 'cd': cwd = /projects/.test(arg) ? '~/projects' : '~'; setPrompt(); break
      case 'project': case 'cat': case 'vim': case 'nano': case 'open':
        if (/readme/i.test(arg)) renderWhoami(); else if (/experience/.test(arg)) renderExperience(); else if (/contactrc/.test(arg)) renderContact(); else renderProject(pid(arg)); break
      case 'skills': renderSkills(); break
      case 'contact': renderContact(); break
      case 'email': print(`<a href="mailto:${ME.contact.email}">${esc(ME.contact.email)}</a>`); break
      case 'phone': print(`<a href="tel:${ME.contact.phone.replace(/\s/g, '')}">${esc(ME.contact.phone)}</a>`); break
      case 'linkedin': print(ME.contact.linkedin ? `<a href="${ME.contact.linkedin}" target="_blank" rel="noopener">${esc(ME.contact.linkedin)}</a>` : `<span class="dim">no linkedin on file yet. try</span> <span class="cmd">email</span> <span class="dim">or</span> <span class="cmd">phone</span>`); break
      case 'github': print(ME.contact.github ? `<a href="${ME.contact.github}" target="_blank" rel="noopener">${esc(ME.contact.github)}</a>` : `<span class="dim">no github on file yet. try</span> <span class="cmd">email</span> <span class="dim">or</span> <span class="cmd">phone</span>`); break
      case 'cv': case 'resume': print(ME.contact.cv ? `<a href="${ME.contact.cv}" target="_blank" rel="noopener">${esc(ME.contact.cv)}</a>` : `<span class="dim">no hosted cv yet. try</span> <span class="cmd">email</span> <span class="dim">or</span> <span class="cmd">phone</span>`); break
      case 'send': case 'mail': case 'message': {
        if (!arg) { print(`<span class="dim">usage:</span> <span class="cmd">send &lt;message&gt;</span>`); break }
        const href = `mailto:${ME.contact.email}?subject=${encodeURIComponent('Hello from your portfolio')}&body=${encodeURIComponent(arg)}`
        print(`<span class="ok">✔</span> <span class="dim">opening mail client…</span> <span class="faint">(nothing?</span> <a href="${href}">click here</a><span class="faint">)</span>`)
        setTimeout(() => { location.href = href }, 300); break
      }
      case 'theme': {
        const t = ['amber', 'green', 'mono'].includes(arg) ? arg : null
        if (!t) { print(`<span class="dim">themes:</span> amber · green · mono`); break }
        document.documentElement.dataset.theme = t === 'amber' ? '' : t; print(`<span class="dim">theme →</span> ${t}`); break
      }
      case 'clear': out.innerHTML = ''; break
      case 'history': history.forEach((h, i) => print(`<span class="faint">${String(i + 1).padStart(4)}</span>  ${esc(h)}`)); break
      case 'pwd': print(`/home/${ME.user}${cwd.slice(1)}`); break
      case 'echo': print(esc(arg)); break
      case 'banner': await banner(); break
      case 'sudo': print(`<span class="err">${esc(ME.user)} is not in the sudoers file.  This incident will be reported.</span>`); break
      case 'rm': print(`<span class="err">rm: cannot remove '${esc(arg || '')}': Permission denied</span> <span class="faint">(nice try)</span>`); break
      case 'exit': case 'quit': case 'logout': print(`<span class="dim">Connection to ${ME.host} kept alive. Try</span> <span class="cmd">contact</span> <span class="dim">instead.</span>`); break
      default: print(`<span class="err">zsh: command not found: ${esc(cmd)}</span>  <span class="dim">→</span> <span class="cmd">help</span>`)
    }
  }

  /* ---------- input ---------- */
  function render() { pinEl = null; typedEl.textContent = buffer; updateGhost(); scroll() }
  function focusInput() { hidden.focus({ preventScroll: true }) }
  let ready = false
  hidden.addEventListener('input', () => { pinEl = null; buffer = hidden.value; render() })
  hidden.addEventListener('keydown', async (e) => {
    if (!ready) return
    if (e.key === 'Enter') { e.preventDefault(); const v = buffer || suggestion(); buffer = ''; hidden.value = ''; render(); inlineEl.classList.add('hidden'); await run(v); inlineEl.classList.remove('hidden'); scroll() }
    else if (e.key === 'ArrowUp') { e.preventDefault(); if (hIdx > 0) { hIdx--; buffer = hidden.value = history[hIdx]; render() } }
    else if (e.key === 'ArrowDown') { e.preventDefault(); hIdx = Math.min(hIdx + 1, history.length); buffer = hidden.value = history[hIdx] || ''; render() }
    else if (e.key === 'Tab') {
      e.preventDefault()
      const g = suggestion()
      if (g) { buffer = hidden.value = buffer + g; render(); return }
      const parts = buffer.split(' ')
      if (parts.length === 1) { const m = COMMANDS.filter(c => c.startsWith(parts[0].toLowerCase())); if (m.length === 1) buffer = hidden.value = m[0] + ' '; else if (m.length > 1 && parts[0]) print(`<span class="dim">${m.join('  ')}</span>`) }
      else if (['project', 'cat', 'vim', 'nano'].includes(parts[0])) { const q = parts[1].replace(/^projects\//, ''); const m = ME.projects.map(p => p.id).filter(id => id.startsWith(q)); if (m.length === 1) buffer = hidden.value = `${parts[0]} ${parts[1].startsWith('projects/') ? 'projects/' : ''}${m[0]}`; else if (m.length > 1) print(`<span class="dim">${m.join('  ')}</span>`) }
      render()
    }
    else if (e.key === 'l' && e.ctrlKey) { e.preventDefault(); out.innerHTML = '' }
    else if (e.key === 'c' && e.ctrlKey) { e.preventDefault(); buffer = hidden.value = ''; print(PS1() + '<span class="dim">^C</span>'); render() }
  })
  term.addEventListener('click', focusInput)
  hidden.addEventListener('blur', () => { caret.classList.add('idle'); modeEl.textContent = '-- NORMAL --' })
  hidden.addEventListener('focus', () => { caret.classList.remove('idle'); modeEl.textContent = '-- INSERT --' })

  /* ---------- clock ---------- */
  ;(function tick() { const d = new Date(); $('#clock').textContent = d.toTimeString().slice(0, 5); setTimeout(tick, 15000) })()

  /* ---------- boot ---------- */
  async function banner() {
    const art = [
      ' ____    _    __     __ ___  ____  ',
      '|  _ \\  / \\   \\ \\   / /|_ _||  _ \\ ',
      '| | | |/ _ \\   \\ \\ / /  | | | | | |',
      '| |_| / ___ \\   \\ V /   | | | |_| |',
      '|____/_/   \\_\\   \\_/   |___||____/ ',
    ]
    for (const l of art) { print(`<span class="amb glow">${esc(l)}</span>`); await sleep(40) }
  }
  async function boot() {
    term.classList.add('show')
    print(`<span class="dim">$ ssh visitor@${ME.host}</span>`); await sleep(500)
    print(`<span class="dim">visitor@${ME.host}'s password: </span><span class="faint">••••••••</span>`); await sleep(600)
    print(`<span class="dim">Last login: ${new Date().toDateString()} from 127.0.0.1</span>`); await sleep(250)
    print('')
    const steps: [string, number][] = [['Mounting /home/david', 120], ['Loading profile.ts', 160], ['Decrypting experience.log', 220], [`Indexing ~/projects (${ME.projects.length} found)`, 140]]
    for (const [s, t] of steps) { const d = print(`<span class="dim">[ <span class="faint">....</span> ] ${esc(s)}</span>`); await sleep(t); d.innerHTML = `<span class="dim">[  <span class="ok">OK</span>  ] ${esc(s)}</span>` }
    print(''); await sleep(250); await banner(); print(''); await sleep(300)

    pinEl = await printCmd('cat README.md'); renderWhoami(); print(''); await sleep(500)
    print(`<span class="dim">type</span> <span class="cmd">help</span> <span class="dim">to see what I answer to, or</span> <span class="cmd">contact</span> <span class="dim">to skip straight to me.</span>`)
    print(`<span class="dim">Press</span> <kbd class="k">Tab</kbd> <span class="dim">or</span> <kbd class="k">Enter</kbd> <span class="dim">to run the suggested command, or type your own.</span>`)
    print('')
    inlineEl.classList.remove('hidden'); ready = true; focusInput(); updateGhost(); scroll()
  }

  /* ---------- gate ---------- */
  let opened = false
  async function openGate() { if (opened) return; opened = true; gate.classList.add('hide'); await sleep(350); gate.remove(); boot() }
  ;(async () => {
    // console.log("Hello, world.")
    const parts: [string, string][] = [['console', 'k'], ['.log', 'p'], ['(', 'p'], ['"Hello, world."', 's'], [')', 'p']]
    await sleep(400)
    for (const [txt, cls] of parts) { const sp = document.createElement('span'); sp.className = cls; gateText.appendChild(sp); for (const ch of txt) { sp.textContent += ch; await sleep(55 + Math.random() * 50) } }
    await sleep(300); gateHint.classList.add('show')
    gate.addEventListener('click', openGate)
    document.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !opened) openGate() })
  })()
})
</script>
