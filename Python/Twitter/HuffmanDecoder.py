# Actually not working as intended, I just now realized I misunderstood the assignment. I'll redo this later though.
def decode(codes, encoded):
    code_length = len(encoded[0].split()[1])
    encoded_list = [encoded[i:i+code_length] for i in range(len(encoded))[::code_length]]
    code_mapping = {key: val for key, val in [mapping.split()[::-1] for mapping in codes]}

    return ''.join('\n' if code_mapping[code] == '[newline]' else code_mapping[code] for code in encoded_list)

print(decode(['a 	100100','b	100101','c	110001','d	100000','[newline]	111111','p	111110','q	000001'], '111110000001100100111111100101110001111110'))


