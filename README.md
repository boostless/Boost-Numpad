# Boost-Numpad

FiveM standalone numpad script

# Usage

* Make sure that the code length is the same as the length specified
```LUA
exports['Boost-Numpad']:openNumpad(code,show,function(correct)
  if correct then
    -- Do something
  end
end)

exports['Boost-Numpad']:openNumpad(1234,true,function(correct)
  if correct then
    -- Do something
  end
end)
```
