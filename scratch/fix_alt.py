import glob

html_files = glob.glob('*.html') + glob.glob('*/*.html') + glob.glob('*/*/*.html')
for f in html_files:
    if f.startswith('scratch'):
        continue
    with open(f, 'r', encoding='utf-8') as fp:
        content = fp.read()
    content = content.replace('<div class="box-img"><img src="assets/img/Eye-code.jpeg" alt="Image">', '<div class="box-img"><img src="assets/img/Eye-code.jpeg" alt="Eye Catch Media"></div>')
    content = content.replace('<div class="box-img"><img src="../assets/img/Eye-code.jpeg" alt="Image">', '<div class="box-img"><img src="../assets/img/Eye-code.jpeg" alt="Eye Catch Media"></div>')
    content = content.replace('<div class="box-img"><img src="../../assets/img/Eye-code.jpeg" alt="Image">', '<div class="box-img"><img src="../../assets/img/Eye-code.jpeg" alt="Eye Catch Media"></div>')
    with open(f, 'w', encoding='utf-8') as fp:
        fp.write(content)
print('Popup alt text updated successfully!')
