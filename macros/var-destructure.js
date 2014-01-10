let var = macro {
  rule { $name:ident = $value:expr } => {
    var $name = $value
  }
       
  rule { {$name:ident (,) ...} = $value:expr } => {
    var obj = $value
    $(, $name = obj.$name) ...
  }
       
  rule { [$name:ident (,) ...] = $value:expr } => {
    var array = $value, index = 0
    $(, $name = array[index++]) ...
  }

}
