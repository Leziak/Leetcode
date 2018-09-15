def decode(encoded):
    encoded, encoded_list = encoded[::-1], []
    while encoded:
        if encoded[0] == '1':
            encoded_list.append(encoded[:3])
            encoded = encoded[3:]
        else:
            encoded_list.append(encoded[:2])
            encoded = encoded[2:]
    return ''.join(chr(int(encoded_char)) for encoded_char in encoded_list)





print(decode('23511011501782351112179911801562340161171141148'))