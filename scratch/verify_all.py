import glob, os, re

files = [f for f in glob.glob('**/*.html', recursive=True) if not f.startswith('.')]
all_ok = True
for f in sorted(files):
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    m = re.search(r'<div class="preloader" id="preloader">[\s\S]*?<img src="([^"]+website_loader_2\.gif)"[\s\S]*?</div>', c)
    if not m:
        print('FAILED MATCH:', f)
        all_ok = False
    else:
        img_rel = m.group(1)
        resolved = os.path.normpath(os.path.join(os.path.dirname(f), img_rel))
        if not os.path.exists(resolved):
            print('IMAGE DOES NOT EXIST:', f, '->', img_rel, '->', resolved)
            all_ok = False
        else:
            print(f'OK: {f} -> {img_rel}')

if all_ok:
    print(f"\nALL {len(files)} HTML FILES VERIFIED PERFECTLY! All paths exist.")
else:
    print("\nSOME ERRORS OCCURRED!")
