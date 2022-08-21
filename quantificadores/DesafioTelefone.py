import re

phone = '(21) 97984-8294'
phone2 = '97984-8294'
phone3 = '(42) 3522-7959'
phone4 = '(21) 79848294'
phone5 = '(21) 9 7984-8294'
phone6 = '(21) 7984-8294'

phone_pattern = re.compile(
    r'(?P<ddd>\(\d{2}\))*\s*(?P<phone>(\d{1}\s?)?\d{4}-?\d{4})')

group_dict = phone_pattern.match(phone6).groupdict()
ddd = group_dict['ddd']
raw_phone = group_dict['phone']
cleaned_phone = re.sub(r'\D', '', raw_phone)

control_arr = [79, 89]

is_incomplete = len(cleaned_phone) == 8 and int(cleaned_phone[:2]) in control_arr
print(cleaned_phone)
print(is_incomplete)
