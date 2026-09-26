import os
import re
import glob

NEW_PRELOADER = '''    <div class="preloader" id="preloader">
        <div class="preloader-eye-container">
            <svg class="preloader-eye-svg" viewBox="0 0 120 66" aria-label="Loading...">
                <defs>
                    <clipPath id="eyeContour">
                        <path d="M 8,33 C 30,5 90,5 112,33 C 90,61 30,61 8,33 Z" />
                    </clipPath>
                    <radialGradient id="irisColor" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stop-color="#38bdf8" />
                        <stop offset="35%" stop-color="#0284c7" />
                        <stop offset="70%" stop-color="#0369a1" />
                        <stop offset="90%" stop-color="#082f49" />
                        <stop offset="100%" stop-color="#020617" />
                    </radialGradient>
                    <linearGradient id="scleraShade" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#e2e8f0" />
                        <stop offset="15%" stop-color="#f8fafc" />
                        <stop offset="85%" stop-color="#ffffff" />
                        <stop offset="100%" stop-color="#cbd5e1" />
                    </linearGradient>
                    <linearGradient id="eyelidSkin" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="var(--eye-lid-top, #ffffff)" />
                        <stop offset="80%" stop-color="var(--eye-lid-mid, #f1f5f9)" />
                        <stop offset="100%" stop-color="var(--eye-lid-bot, #e2e8f0)" />
                    </linearGradient>
                </defs>
                <path class="eye-sclera" d="M 8,33 C 30,5 90,5 112,33 C 90,61 30,61 8,33 Z" fill="url(#scleraShade)" />
                <g clip-path="url(#eyeContour)">
                    <g class="eye-iris-group">
                        <circle cx="60" cy="33" r="19" fill="url(#irisColor)" />
                        <circle cx="60" cy="33" r="14" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1" stroke-dasharray="2, 2" />
                        <circle cx="60" cy="33" r="9" fill="#090d16" />
                        <circle cx="55" cy="27" r="3.2" fill="#ffffff" opacity="0.95" />
                        <circle cx="65.5" cy="37" r="1.6" fill="#ffffff" opacity="0.75" />
                    </g>
                    <g class="eye-lid-shutter">
                        <path d="M 0,-10 L 120,-10 L 120,33 C 90,61 30,61 0,33 Z" fill="url(#eyelidSkin)" />
                        <path class="eye-lash-line" d="M 0,33 C 30,61 90,61 120,33" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" />
                    </g>
                </g>
                <path class="eye-upper-stroke" d="M 7,33 C 30,5 90,5 113,33" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
                <path class="eye-lower-stroke" d="M 8,33 C 30,61 90,61 112,33" fill="none" stroke="currentColor" opacity="0.6" stroke-width="1.8" stroke-linecap="round" />
                <path class="eye-crease" d="M 22,17 C 45,9 75,9 98,17" fill="none" stroke="currentColor" opacity="0.25" stroke-width="1.2" stroke-linecap="round" />
            </svg>
        </div>
    </div>'''

html_files = glob.glob('*.html') + glob.glob('*/*.html') + glob.glob('*/*/*.html')
html_files = [f for f in html_files if not f.startswith('scratch')]

print(f'Found {len(html_files)} HTML files to update.')

for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Determine relative prefix
    depth = filepath.count(os.sep)
    if depth == 0:
        rel = ''
    elif depth == 1:
        rel = '../'
    elif depth == 2:
        rel = '../../'

    # 1. Update Title and Metas
    content = content.replace('I CATCH தமிழ்', 'Eye Catch Media')
    content = content.replace('I CATCH ?????', 'Eye Catch Media')

    # 2. Update Preloader: replace <div class="preloader" id="preloader">...</div>
    pattern_preloader = r'<div class="preloader" id="preloader">.*?</div>(?=\s*<div class="popup-subscribe-area">)'
    content, count_p = re.subn(pattern_preloader, NEW_PRELOADER.strip(), content, flags=re.DOTALL)

    # 3. Update Subscription Popup lady image: replace popup_subscribe.jpg with Eye-code.jpeg
    content = re.sub(r'src="[^"]*assets/img/normal/popup_subscribe\.jpg"', f'src="{rel}assets/img/Eye-code.jpeg"', content)

    # 4. Update Header / Footer / Mobile logos
    # Replace logo.svg with Eye-code-transparent.png
    content = re.sub(r'src="[^"]*assets/img/logo\.svg"', f'src="{rel}assets/img/Eye-code-transparent.png"', content)
    # Replace logo-white.svg with Eye-code-dark.png
    content = re.sub(r'src="[^"]*assets/img/logo-white\.svg"', f'src="{rel}assets/img/Eye-code-dark.png"', content)
    # Replace logo-footer.svg with Eye-code-dark.png
    content = re.sub(r'src="[^"]*assets/img/logo-footer\.svg"', f'src="{rel}assets/img/Eye-code-dark.png"', content)
    # Replace logo-footer-black.svg with Eye-code-transparent.png
    content = re.sub(r'src="[^"]*assets/img/logo-footer-black\.svg"', f'src="{rel}assets/img/Eye-code-transparent.png"', content)

    # Update any alt text for logo images to 'Eye Catch Media'
    content = re.sub(r'alt="I CATCH தமிழ்"', 'alt="Eye Catch Media"', content)
    content = re.sub(r'alt="I CATCH \?+"', 'alt="Eye Catch Media"', content)

    # 5. Update author lines 'By - I CATCH தமிழ்' to 'By - Eye Catch Media'
    content = content.replace('By - I CATCH தமிழ்', 'By - Eye Catch Media')

    # 6. Update copyright
    content = content.replace('I CATCH தமிழ்</a>. All Rights Reserved.', 'Eye Catch Media</a>. All Rights Reserved.')
    content = content.replace('I CATCH ?????</a>. All Rights Reserved.', 'Eye Catch Media</a>. All Rights Reserved.')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f'Updated {filepath} (preloader replaced: {count_p > 0})')

print('All HTML files updated successfully!')
