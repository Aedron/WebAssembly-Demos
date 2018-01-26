
#[no_mangle]
pub fn fib(i: i32) -> i32{
    match i {
        0 => 0,
        1 => 1,
        _ => fib(i-1) + fib(i - 2)
    }
}
