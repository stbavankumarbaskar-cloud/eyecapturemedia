import glob, re, os

files = [f for f in glob.glob('**/*.html', recursive=True) if not f.startswith('.')]
print(f"Total HTML files found: {len(files)}")

updated_count = 0
for filepath in sorted(files):
    with open(filepath, 'r', encoding='utf-8') as fp:
        content = fp.read()
    
    # Calculate prefix based on path depth
    depth = len(os.path.normpath(filepath).split(os.sep)) - 1
    prefix = '../' * depth
    
    new_preloader = f'''    <div class="preloader" id="preloader">
        <div class="preloader-gif-wrap">
            <img src="{prefix}assets/img/website_loader_2.gif" alt="Eye Catch Media Loading..." class="preloader-gif">
        </div>
    </div>'''
    
    pattern = r'<div class="preloader" id="preloader">[\s\S]*?</div>(?=\s*<div class="popup-subscribe-area")'
    new_content, count = re.subn(pattern, new_preloader, content)
    
    if count > 0:
        with open(filepath, 'w', encoding='utf-8') as fp:
            fp.write(new_content)
        updated_count += 1
        print(f"Updated {filepath} (depth {depth}, prefix '{prefix}')")
    else:
        print(f"WARNING: No preloader match in {filepath}")

print(f"\nSuccessfully updated {updated_count} / {len(files)} files!")
