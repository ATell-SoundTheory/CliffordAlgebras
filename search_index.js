var documenterSearchIndex = {"docs":
[{"location":"","page":"-","title":"-","text":"Exported symbols from CliffordAlgebras.jl:","category":"page"},{"location":"","page":"-","title":"-","text":"Modules = [CliffordAlgebras]\nPrivate = false\nOrder = [:function,:type]","category":"page"},{"location":"#Base.:*-Union{Tuple{CA}, Tuple{MultiVector{CA, T, BI, K} where {T, BI, K}, MultiVector{CA, T, BI, K} where {T, BI, K}}} where CA","page":"-","title":"Base.:*","text":"a * b\n\nCalculates the geometric product of two MultiVectors a and b.\n\n\n\n\n\n","category":"method"},{"location":"#Base.:/-Union{Tuple{CA}, Tuple{MultiVector{CA, T, BI, K} where {T, BI, K}, MultiVector{CA, T, BI, K} where {T, BI, K}}} where CA","page":"-","title":"Base.:/","text":"a / b\n(/)(a::MultiVector{CA}, b::MuliVector{CA}) where CA\n\nCalculates the MultiVector quotient a/b by evaluating a*inv(b).\n\n\n\n\n\n","category":"method"},{"location":"#Base.:\\-Union{Tuple{CA}, Tuple{MultiVector{CA, T, BI, K} where {T, BI, K}, MultiVector{CA, T, BI, K} where {T, BI, K}}} where CA","page":"-","title":"Base.:\\","text":"b \\ a\n(\\)(b::MultiVector{CA}, b::MuliVector{CA}) where CA\n\nCalculates the MultiVector quotient a/b by evaluating inv(b)*a.\n\n\n\n\n\n","category":"method"},{"location":"#Base.:~-Tuple{MultiVector}","page":"-","title":"Base.:~","text":"~a\n(~)(::MultiVector)\n\nReturns the reversed MultiVector reverse(a).\n\n\n\n\n\n","category":"method"},{"location":"#Base.conj-Tuple{MultiVector}","page":"-","title":"Base.conj","text":"conj(mv::MultiVector)\n\nReturn the conjugate of the MultiVector, i.e. reverse(grin(mv)).\n\n\n\n\n\n","category":"method"},{"location":"#Base.exp-Tuple{MultiVector}","page":"-","title":"Base.exp","text":"exp(::MultiVector)\n\nCalculates the exponential function of the MultiVector defined by analytic continuation. The generated code is automaticall specialized for the sparse representation of the MultiVector. It may take advantage of commuting base vectors and split off exponential factors. Hyperbolic, trigonometric and nilpotent solutions are recognized and handled separately. Calling prune or grade before exp may help to find the best algorithm for the exponential evaluation.\n\n\n\n\n\n","category":"method"},{"location":"#Base.inv-Tuple{MultiVector}","page":"-","title":"Base.inv","text":"inv(::MultiVector)\n\nFinds the inverse of the MultiVector. If no inverse exists a SingularException is thrown.\n\n\n\n\n\n","category":"method"},{"location":"#Base.reverse-Tuple{MultiVector}","page":"-","title":"Base.reverse","text":"reverse(::MultiVector)\n\nReturns the MultiVector that has all the basis vector products reversed.\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.:×₊-Union{Tuple{Tb}, Tuple{Ta}, Tuple{CA}, Tuple{MultiVector{CA, Ta, BI, K} where {BI, K}, MultiVector{CA, Tb, BI, K} where {BI, K}}} where {CA, Ta, Tb}","page":"-","title":"CliffordAlgebras.:×₊","text":"a ×₊ b\n\nCalculates the anti-commutator ab+ba of two MultiVectors a and b.\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.:×₋-Union{Tuple{Tb}, Tuple{Ta}, Tuple{CA}, Tuple{MultiVector{CA, Ta, BI, K} where {BI, K}, MultiVector{CA, Tb, BI, K} where {BI, K}}} where {CA, Ta, Tb}","page":"-","title":"CliffordAlgebras.:×₋","text":"a ×₋ b\n\nCalculates the commutator ab-ba of two MultiVectors a and b.\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.:∧-Union{Tuple{CA}, Tuple{MultiVector{CA, T, BI, K} where {T, BI, K}, MultiVector{CA, T, BI, K} where {T, BI, K}}} where CA","page":"-","title":"CliffordAlgebras.:∧","text":"a ∧ b\n\nCalculates the wedge product between two MultiVectors a and b.\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.:∨-Union{Tuple{CA}, Tuple{MultiVector{CA, T, BI, K} where {T, BI, K}, MultiVector{CA, T, BI, K} where {T, BI, K}}} where CA","page":"-","title":"CliffordAlgebras.:∨","text":"a ∨ b\n\nCalculates the regressive product of the MultiVectors a and b.\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.:≀-Union{Tuple{CA}, Tuple{MultiVector{CA, T, BI, K} where {T, BI, K}, MultiVector{CA, T, BI, K} where {T, BI, K}}} where CA","page":"-","title":"CliffordAlgebras.:≀","text":"a ≀ b\n\nCalculates the sandwich product abreverse(a) for two MultiVectors a and b.\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.:⋅-Union{Tuple{CA}, Tuple{MultiVector{CA, T, BI, K} where {T, BI, K}, MultiVector{CA, T, BI, K} where {T, BI, K}}} where CA","page":"-","title":"CliffordAlgebras.:⋅","text":"a ⋅ b\n\nCalculates the \"fat dot\" product between the MultiVectors a and b.\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.:⋆-Union{Tuple{CA}, Tuple{MultiVector{CA, T, BI, K} where {T, BI, K}, MultiVector{CA, T, BI, K} where {T, BI, K}}} where CA","page":"-","title":"CliffordAlgebras.:⋆","text":"a ⋆ b\n\nCalculates the scalar product of the MultiVectors a and b.\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.:⨼-Union{Tuple{CA}, Tuple{MultiVector{CA, T, BI, K} where {T, BI, K}, MultiVector{CA, T, BI, K} where {T, BI, K}}} where CA","page":"-","title":"CliffordAlgebras.:⨼","text":"a ⨼ b\n\nCalculates the left contraction of the MultiVectors a and b.\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.:⨽-Union{Tuple{CA}, Tuple{MultiVector{CA, T, BI, K} where {T, BI, K}, MultiVector{CA, T, BI, K} where {T, BI, K}}} where CA","page":"-","title":"CliffordAlgebras.:⨽","text":"a ⨽ b\n\nCalculates the right contraction of the MultiVectors a and b.\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.algebra-Union{Tuple{Type{var\"#s16\"} where var\"#s16\"<:(MultiVector{CA, T, BI, K} where {T, BI, K})}, Tuple{CA}} where CA","page":"-","title":"CliffordAlgebras.algebra","text":"algebra(::MultiVector)\nalgebra(::Type{<:MultiVector})\n\nReturns the CliffordAlgebra instance to which the MultiVector belongs.\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.baseindices-Union{Tuple{Type{var\"#s16\"} where var\"#s16\"<:(MultiVector{CA, T, BI, K} where K)}, Tuple{BI}, Tuple{T}, Tuple{CA}} where {CA, T, BI}","page":"-","title":"CliffordAlgebras.baseindices","text":"baseindices(::MultiVector)\nbaseindices(::Type{<:MultiVector})\n\nReturns the indices for the sparse MultiVector basis.\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.basesymbol-Tuple{Type{var\"#s2\"} where var\"#s2\"<:CliffordAlgebra, Integer}","page":"-","title":"CliffordAlgebras.basesymbol","text":"basesymbol(::CliffordAlgebra, n::Integer)\nbasesymbol(::Type{<:CliffordAlgebra}, n::Integer)\n\nReturns the symbol used for the n-th basis multivector of the algebra.\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.basevector-Tuple{Type{var\"#s16\"} where var\"#s16\"<:CliffordAlgebra, Integer}","page":"-","title":"CliffordAlgebras.basevector","text":"basevector(::CliffordAlgebra, n::Integer)\nbasevector(::Type{<:CliffordAlgebra}, n::Integer)\n\nReturns the n-th basis MultiVector of the given CliffordAlgebra.\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.basevector-Tuple{Type{var\"#s16\"} where var\"#s16\"<:CliffordAlgebra, Symbol}","page":"-","title":"CliffordAlgebras.basevector","text":"basevector(::CliffordAlgebra, name::Symbol)\nbasevector(::Type{<:CliffordAlgebra}, name::Symbol)\n\nReturns the basis MultiVector with the specified name from the given Clifford Algebra.\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.cayleytable-Tuple{IO, CliffordAlgebra}","page":"-","title":"CliffordAlgebras.cayleytable","text":"caleytable(io::IO, ca::CliffordAlgebra)\ncaleytable(io::IO, CA::Type{<:CliffordAlgebra})\n\nGenerates a Cayley table view of the algebra.\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.character-Tuple{Type{var\"#s2\"} where var\"#s2\"<:CliffordAlgebra}","page":"-","title":"CliffordAlgebras.character","text":"character(::CliffordAlgebra)\ncharacter(::Type{<:CliffordAlgebra})\n\nReturns the square of the pseudoscalar of the algebra.\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.coefficients-Tuple{MultiVector}","page":"-","title":"CliffordAlgebras.coefficients","text":"coefficients(::MultiVector)\n\nReturns the sparse coefficients of the MultiVector.\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.dimension-Tuple{Type{var\"#s2\"} where var\"#s2\"<:CliffordAlgebra}","page":"-","title":"CliffordAlgebras.dimension","text":"dimension(::CliffordAlgebra)\ndimension(::Type{<:CliffordAlgebra})\n\nReturns the dimension of the algebra, i.e. the number of coefficients in a general multivector.\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.dual-Union{Tuple{MultiVector{CA, T, BI, K}}, Tuple{K}, Tuple{BI}, Tuple{T}, Tuple{CA}} where {CA, T, BI, K}","page":"-","title":"CliffordAlgebras.dual","text":"dual(mv::MultiVector)\n\nReturns the Poincaré dual of the MultiVector, such that for all basis MultiVectors mv * dual(mv) = pseudoscalar. Dual is a linear map and the images of other MultiVectors follow from the images of the basis MultiVectors.\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.even-Tuple{MultiVector}","page":"-","title":"CliffordAlgebras.even","text":"even(::MultiVector)\n\nReturns the even grade projection of the MultiVector.\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.extend-Union{Tuple{MultiVector{CA, T, BI, K} where {T, BI, K}}, Tuple{CA}} where CA","page":"-","title":"CliffordAlgebras.extend","text":"extend(::MultiVector)\n\nReturns a new MultiVector with a non-sparse coefficient coding. This can be useful to manage type stability.\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.grade-Tuple{MultiVector, Integer}","page":"-","title":"CliffordAlgebras.grade","text":"grade(::MultiVector, k::Integer)\n\nProjects the MultiVector onto the k-vectors.\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.grin-Tuple{MultiVector}","page":"-","title":"CliffordAlgebras.grin","text":"grin(mv::MultiVector)\n\nReturns the grade involution of the MultiVector, i.e. even(mv) - odd(mv).\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.isgrade-Tuple{MultiVector, Integer}","page":"-","title":"CliffordAlgebras.isgrade","text":"isgrade(::MultiVector, k::Integer)\n\nReturns true if the MultiVector is of grade k, false if not.\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.matrix-Tuple{MultiVector}","page":"-","title":"CliffordAlgebras.matrix","text":"matrix(::MultiVector)\n\nReturns the matrix algebra representation of the MultiVector.\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.odd-Tuple{MultiVector}","page":"-","title":"CliffordAlgebras.odd","text":"odd(::MultiVector)\n\nReturns the odd grade projection of the MultiVector.\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.order-Union{Tuple{Type{var\"#s2\"} where var\"#s2\"<:(CliffordAlgebra{Np, Nn, Nz, S, BT} where {S, BT})}, Tuple{Nz}, Tuple{Nn}, Tuple{Np}} where {Np, Nn, Nz}","page":"-","title":"CliffordAlgebras.order","text":"order(::CliffordAlgebra)\norder(::Type{<:CliffordAlgebra})\n\nReturns the order of the algebra. The order is the sum of the signature.\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.outermorphism-Tuple{AbstractMatrix{T} where T, MultiVector}","page":"-","title":"CliffordAlgebras.outermorphism","text":"outermorphism(A::AbstractMatrix, mv::MultiVector)\n\nCalculates the outermorphism f of the MultiVector defined by f(v) = Av if v is in the grade-1 subspace of the algebra.\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.polarize-Union{Tuple{MultiVector{CA, T, BI, K} where {T, BI, K}}, Tuple{CA}} where CA","page":"-","title":"CliffordAlgebras.polarize","text":"polarize(mv::MultiVector)\nmv'\n\nCalculates the polarization of the MultiVector, i.e. mv * pseudoscalar.\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.prune-Tuple{MultiVector}","page":"-","title":"CliffordAlgebras.prune","text":"prune(::MultiVector ; rtol = 1e-8 )\n\nReturns a new MultiVector with all basis vectors removed from the sparse basis whose coefficients fall below the relative magnitude threshold. This function is not type stable, because the return type depends on the sparse basis.\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.pseudoscalar-Tuple{Type{var\"#s16\"} where var\"#s16\"<:CliffordAlgebra}","page":"-","title":"CliffordAlgebras.pseudoscalar","text":"pseudoscalar(::CliffordAlgebra)\npseudoscalar(::Type{<:CliffordAlgebra})\n\nReturns the pseudoscalar of the given algebra.\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.scalar-Union{Tuple{MultiVector{CA, T, BI, K} where K}, Tuple{BI}, Tuple{T}, Tuple{CA}} where {CA, T, BI}","page":"-","title":"CliffordAlgebras.scalar","text":"scalar(mv::MultiVector)\n\nReturns the scalar component of the multivector. The result if of the internal storage type eltype(mv).\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.signature-Union{Tuple{Type{var\"#s2\"} where var\"#s2\"<:(CliffordAlgebra{Np, Nn, Nz, S, BT} where {S, BT})}, Tuple{Nz}, Tuple{Nn}, Tuple{Np}} where {Np, Nn, Nz}","page":"-","title":"CliffordAlgebras.signature","text":"signature(::CliffordAlgebra)\nsignature(::Type{<:CliffordAlgebra})\n\nReturns the signature of the algebra.\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.signaturetable-Tuple{IO, CliffordAlgebra}","page":"-","title":"CliffordAlgebras.signaturetable","text":"signaturetable(io::IO, ca::CliffordAlgebra)\nsignaturetable(io::IO, CA::Type{<:CliffordAlgebra})\n\nPrints the 1-vector basis symbols and their squares.\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.vector-Tuple{MultiVector}","page":"-","title":"CliffordAlgebras.vector","text":"vector(::MultiVector)\n\nReturns the non-sparse vector representation of the MutliVector.\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.Λᵏ-Union{Tuple{k}, Tuple{MultiVector, Val{k}}} where k","page":"-","title":"CliffordAlgebras.Λᵏ","text":"Λᵏ(::MultiVector, ::Val{k}) where k\nΛᵏ(::MultiVector, k::Integer)\n\nProjects the MultiVector onto k-vectors. Similar to grade(mv,k), but uses @generated code and compile time optimizations.\n\n\n\n\n\n","category":"method"},{"location":"#LinearAlgebra.norm-Tuple{MultiVector}","page":"-","title":"LinearAlgebra.norm","text":"norm(::MultiVector)\n\nCalculates the MultiVector norm defined as sqrt(grade(mv*reverse(mv),0))\n\n\n\n\n\n","category":"method"},{"location":"#LinearAlgebra.norm_sqr-Tuple{MultiVector}","page":"-","title":"LinearAlgebra.norm_sqr","text":"norm_sqr(::MultiVector)\n\nCalculates the MultiVector squared norm defined as grade(mv*reverse(mv),0)\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.CliffordAlgebra","page":"-","title":"CliffordAlgebras.CliffordAlgebra","text":"CliffordAlgebra(Npos::Integer, Nneg::Integer, Nzero::Integer, S::NTuple(N,Symbol))\n\nSingleton instance of the type CliffordAlgebra that describes a geometric algebra with the signature (Npos,Nneg,Nzero), base symbols S. The base symbols are in order of the signature.\n\n\n\n\n\n","category":"type"},{"location":"#CliffordAlgebras.CliffordAlgebra-Tuple{Integer, Integer, Integer}","page":"-","title":"CliffordAlgebras.CliffordAlgebra","text":"CliffordAlgebra(Npos::Integer, Nneg::Integer, Nzero::Integer)\n\nGenerates a geometric algebra with signature (Npos,Nneg,Nzero).\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.CliffordAlgebra-Tuple{Integer, Integer}","page":"-","title":"CliffordAlgebras.CliffordAlgebra","text":"CliffordAlgebra(Npos::Integer, Nneg::Integer)\n\nGenerates a geometric algebra with signature (Npos,Nneg,0).\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.CliffordAlgebra-Tuple{Integer}","page":"-","title":"CliffordAlgebras.CliffordAlgebra","text":"CliffordAlgebra(N::Integer)\n\nGenerates a geometric algebra with signature (N,0,0).\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.CliffordAlgebra-Tuple{Symbol}","page":"-","title":"CliffordAlgebras.CliffordAlgebra","text":"CliffordAlgebra(a::Symbol)\n\nGenerates a predefined algebra from a identifier. Known algebras are     - :Hyperbolic or :Hyper     - :Complex or :ℂ     - :Dual or :Grassmann     - :Grassmann2D or :G2     - :Grassmann3D or :G3     - :Quaternions or :ℍ     - :Cl2 and :Cl3     - :Spacetime     - :PGA2D or :Projective2D or :Plane2D     - :PGA3D or :Projective3D or :Plane3D     - :CGA2D or :Conformal2D     - :CGA3D or :Conformal3D     - :DCGA3D or :DoubleConformal3D     - :TCGA3D or :TripleConformal3D     - :DCGSTA or :DoubleConformalSpacetime     - :QCGA or :QuadricConformal\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.MultiVector","page":"-","title":"CliffordAlgebras.MultiVector","text":"MultiVector{CA,T,BI}\n\nType for a multivector belonging to the algebra CA<:CliffordAlgbra with vector coefficients of type T. Coefficients are stored using a sparse coding, and only the coefficients of the basis indices stored in the tuple BI are considered.\n\n\n\n\n\n","category":"type"},{"location":"#CliffordAlgebras.MultiVector-Union{Tuple{T}, Tuple{N}, Tuple{Type{var\"#s16\"} where var\"#s16\"<:CliffordAlgebra, Tuple{Vararg{T, N}}}} where {N, T<:Real}","page":"-","title":"CliffordAlgebras.MultiVector","text":"MultiVector(::CliffordAlgebra, v::NTuple{N,T}) where {N,T<:Real}\nMultiVector(::Type{<:CliffordAlgebra}, v::NTuple{N,T}) where {N,T<:Real}\n\nCreates a MultiVector by converting the provided vector v to a 1-vector. The internal storage type of the MultiVector is T.\n\n\n\n\n\n","category":"method"},{"location":"#CliffordAlgebras.MultiVector-Union{Tuple{T}, Tuple{Type{var\"#s16\"} where var\"#s16\"<:CliffordAlgebra, T}} where T<:Real","page":"-","title":"CliffordAlgebras.MultiVector","text":"MultiVector(::CliffordAlgebra, a::Real)\nMultiVector(::Type{<:CliffordAlgebra}, a::Real)\n\nCreates a MultiVector from the real number a with only a scalar component. The internal storage type of the MultiVector is the type of a.\n\n\n\n\n\n","category":"method"}]
}
