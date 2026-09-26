import glob

html_files = glob.glob('*.html') + glob.glob('*/*.html') + glob.glob('*/*/*.html')
for f in html_files:
    if f.startswith('scratch'):
        continue
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    c = c.replace('<div class="box-img"><img src="assets/img/Eye-code.jpeg" alt="Eye Catch Media"></div></div>', '<div class="box-img"><img src="assets/img/Eye-code.jpeg" alt="Eye Catch Media"></div>')
    c = c.replace('<div class="box-img"><img src="../assets/img/Eye-code.jpeg" alt="Eye Catch Media"></div></div>', '<div class="box-img"><img src="../assets/img/Eye-code.jpeg" alt="Eye Catch Media"></div>')
    c = c.replace('<div class="box-img"><img src="../../assets/img/Eye-code.jpeg" alt="Eye Catch Media"></div></div>', '<div class="box-img"><img src="../../assets/img/Eye-code.jpeg" alt="Eye Catch Media"></div>')
    with open(f, 'w', encoding='utf-8') as fp:
        fp.write(c)

print('Fixed duplicate </div> across all HTML files successfully!')
