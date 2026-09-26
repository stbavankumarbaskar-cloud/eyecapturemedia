import glob, re

files = [f for f in glob.glob('**/*.html', recursive=True) if not f.startswith('.')]
matched = 0
for f in sorted(files):
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    # Check if preloader exists
    m = re.search(r'<div class="preloader" id="preloader">[\s\S]*?</div>(?=\s*<div class="popup-subscribe-area")', c)
    if m:
        matched += 1
    else:
        print('Did not match pattern in:', f)
print(f'Matched {matched} / {len(files)}')
